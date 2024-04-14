import fs from 'fs';
import path from 'path';

import matter, { GrayMatterFile } from 'gray-matter';

const ARTICLES_PATH = '/articles';
const CACHE_DIR = '/node_modules/.cache/';

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
const parseMetaTag = (tags: string[], key: string, defaultValue: string, check?: RegExp): string => {
  const tag = tags?.filter((tag) => tag.startsWith(`${key}:`))[0];
  const value = tag && tag.replace(`${key}:`, '');

  if (check === undefined) return value ?? defaultValue;

  if (value && check.test(value)) return value;
  return defaultValue;
};

/**
 * tags から 投稿日を取得する
 */
const getPostDate = (tags: string | null): string | null => {
  if (!tags) return null;
  const date = parseMetaTag(tags.split(','), 'date', '', /^\d{4}-\d{1,2}-\d{1,2}$/);
  return date;
};

/**
 * ファイル一覧を取得する
 */
const getFilePaths = (articlesDir: string): string[] => {
  const files = fs.readdirSync(articlesDir);
  const filteredFiles = files.filter((f) => !f.startsWith('.'));
  const filePaths = filteredFiles.map((f) => path.join(articlesDir, f));
  return filePaths;
};

/**
 * ファイルを読み込む
 */
const readFile = (filePath: string): Article => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const matterOptions = {};
  const md = matter<string, typeof matterOptions>(fileContent, matterOptions);

  const { category, created_at, tags } = md.data as EsaMeta;
  const topLevelCategory = category ? category.split('/')[0] : 'uncategorized';

  const postedAt = getPostDate(tags) ?? created_at;

  return { article: md, filePath, category: topLevelCategory, postedAt };
};

/**
 * 記事をキャッシュする
 */
const cacheArticles = (groupedArticles: Article[]): void => {
  const cacheDir = path.join(process.cwd(), CACHE_DIR);
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
  }

  const cacheFilePath = path.join(cacheDir, 'articles.json');
  fs.writeFileSync(cacheFilePath, JSON.stringify(groupedArticles));
};

/**
 * ファイルを読み込む
 */
const loadFiles = (): void => {
  const articlesDir = path.join(process.cwd(), ARTICLES_PATH);
  const filePaths = getFilePaths(articlesDir);
  const articles = filePaths.map((filePath) => readFile(filePath));
  cacheArticles(articles);
};

loadFiles();

/* ---------- */

export interface GetArticle {
  article: {
    content: string;
    data: EsaMeta;
  };
  filePath: string;
  category: string;
  postedAt: string;
}

/**
 * 記事を取得する
 */
export const getArticles = (): GetArticle[] => {
  const cacheDir = path.join(process.cwd(), CACHE_DIR);
  const cacheFilePath = path.join(cacheDir, 'articles.json');
  const cacheFile = fs.readFileSync(cacheFilePath, 'utf-8');
  const articles = JSON.parse(cacheFile) as GetArticle[];

  const sortedArticles = articles.sort((a, b) => {
    const aDate = new Date(a.postedAt);
    const bDate = new Date(b.postedAt);
    return bDate.getTime() - aDate.getTime();
  });

  return sortedArticles;
};
