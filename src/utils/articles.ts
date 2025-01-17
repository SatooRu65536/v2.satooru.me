import type { IconKey } from '@/components/shares/icon';
import type { GrayMatterFile } from 'gray-matter';

import fs from 'node:fs';
import path from 'node:path';

import { filterIconKeys } from '@/components/shares/icon';
import matter from 'gray-matter';

const ARTICLES_PATH = '/articles';
// eslint-disable-next-line regexp/no-unused-capturing-group, regexp/no-super-linear-backtracking
const FIRST_IMAGE_REGEX = /\s*(<img.*?src=['"](.*)['"].*>|!\[.*\]\((.*)\))/;

interface Article {
  article: GrayMatterFile<string>;
  filePath: string;
  category: string;
  postedAt: string;
}

interface EsaMeta {
  title: string;
  category: string | null;
  tags: string | null;
  created_at: string;
  updated_at: string;
  published: string;
  number: number;
}

/**
 * タグからメタ情報を取得する
 */
function parseMetaTag(tags: string[] | undefined, key: string, defaultValue: string, check?: RegExp): string {
  const tag = tags?.filter((tag) => tag.startsWith(`${key}:`))[0];
  const value = tag === undefined ? undefined : tag.replace(`${key}:`, '');

  if (check === undefined) return value ?? defaultValue;

  if (value !== undefined && check.test(value)) return value;
  return defaultValue;
}

/**
 * tags から 投稿日を取得する
 */
function getPostDate(tags: string | null): string | null {
  if (tags === null) return null;
  const date = parseMetaTag(tags.split(','), 'date', '', /^\d{4}-\d{1,2}-\d{1,2}$/);
  return date;
}

/**
 * ファイル一覧を取得する
 */
function getFilePaths(articlesDir: string): string[] {
  const files = fs.readdirSync(articlesDir);
  const filteredFiles = files.filter((f) => !f.startsWith('.'));
  const filePaths = filteredFiles.map((f) => path.join(articlesDir, f));
  return filePaths;
}

/**
 * ファイルを読み込む
 */
function readFile(filePath: string): Article {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const matterOptions = {};
  const md = matter<string, typeof matterOptions>(fileContent, matterOptions);

  // eslint-disable-next-line ts/naming-convention
  const { category, created_at, tags } = md.data as EsaMeta;
  const topLevelCategory = category === null ? 'uncategorized' : category.split('/')[0];

  const postedAt = getPostDate(tags) ?? created_at;

  return { article: md, filePath, category: topLevelCategory, postedAt };
}

/**
 * ファイルを読み込む
 */
function loadFiles(): Article[] {
  const articlesDir = path.join(process.cwd(), ARTICLES_PATH);
  const filePaths = getFilePaths(articlesDir);
  const articles = filePaths.map((filePath) => readFile(filePath));
  return articles;
}

/* ---------- */

/**
 * 記事から特定の情報を取得する
 */
function getInfo(content: string, header: string, level: number | undefined = undefined): string {
  const regex = new RegExp(`#{${level ?? '1,5'}} ${header}\n([^#]*)\n`);
  const match = content.match(regex);
  return match ? match[1] : '';
}

/**
 * 記事からサムネイルを取得する
 */
function getThumbnail(content: string): string | undefined {
  const match = content.match(FIRST_IMAGE_REGEX);
  const thumbnail = (match && (match[2] || match[3])) ?? undefined;
  return thumbnail;
}

export interface GetArticle {
  content: string;
  data: EsaMeta;
  filePath: string;
  category: string;
  postedAt: string;
  thumbnail: string | undefined;
}

/**
 * 記事を取得する
 */
function getArticles() {
  const articles = loadFiles();
  const formattedArticles: GetArticle[] = articles.map((article) => {
    const thumbnail = getThumbnail(article.article.content);
    const { data, content } = article.article;
    const { filePath, category, postedAt } = article;
    return { content, filePath, category, postedAt, thumbnail, data: data as EsaMeta };
  });

  const sortedArticles = formattedArticles.sort((a, b) => {
    const aDate = new Date(a.postedAt);
    const bDate = new Date(b.postedAt);
    return bDate.getTime() - aDate.getTime();
  });

  const productArticles = sortedArticles.filter((article) => article.category === 'product');

  return { articles: sortedArticles, products: productArticles };
}

export const { articles, products } = getArticles();

export interface Product {
  title: string;
  tag: string;
  techs: IconKey[];
  thumbnail?: string;
  createdAt: string;
}

/**
 * 記事から product の情報を取り出す
 */
export function toProduct(article: GetArticle): Product {
  const { data, content, thumbnail } = article;
  const { title, tags } = data;

  const tag = parseMetaTag(tags?.split(', '), 'type', 'その他');

  const techsStr = getInfo(content, 'icons');
  const techs = filterIconKeys(techsStr.replace(/ /, '').split(','));

  return { title, tag, techs, thumbnail, createdAt: article.postedAt };
}
