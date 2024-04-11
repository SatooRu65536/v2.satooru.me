import dayjs from 'dayjs';
import { ReactElement } from 'react';

import styles from './index.module.scss';

import { IconKey } from '@/elements/icon';
import ProductCard from '@/elements/productCard';
import SectionLayout from '@/layouts/section';

interface Product {
  title: string;
  tag: string;
  techs: IconKey[];
  thumbnail?: string;
  dateStr: string;
}

const products: Product[] = [
  {
    title: 'Product 1',
    tag: 'webアプリ',
    techs: ['aftereffects', 'c', 'cloudflare', 'css', 'docker', 'electron'],
    thumbnail: '/default/penguin.webp',
    dateStr: '2021-01-01',
  },
  {
    title: 'Product 2',
    tag: 'webアプリ',
    techs: ['aftereffects', 'c', 'cloudflare', 'css', 'docker', 'electron'],
    thumbnail: '/default/penguin.webp',
    dateStr: '2021-01-02',
  },
  {
    title: 'Product 3',
    tag: 'webアプリ',
    techs: ['aftereffects', 'c', 'cloudflare', 'css', 'docker', 'electron'],
    thumbnail: '/default/penguin.webp',
    dateStr: '2021-01-03',
  },
  {
    title: 'Product 4',
    tag: 'webアプリ',
    techs: ['aftereffects', 'c', 'cloudflare', 'css', 'docker', 'electron'],
    thumbnail: '/default/penguin.webp',
    dateStr: '2021-01-04',
  },
  {
    title: 'Product 5',
    tag: 'webアプリ',
    techs: ['aftereffects', 'c', 'cloudflare', 'css', 'docker', 'electron'],
    thumbnail: '/default/penguin.webp',
    dateStr: '2021-01-05',
  },
  {
    title: 'Product 6',
    tag: 'webアプリ',
    techs: ['aftereffects', 'c', 'cloudflare', 'css', 'docker', 'electron'],
    thumbnail: '/default/penguin.webp',
    dateStr: '2021-01-06',
  },
  {
    title: 'Product 7',
    tag: 'webアプリ',
    techs: ['aftereffects', 'c', 'cloudflare', 'css', 'docker', 'electron'],
    thumbnail: '/default/penguin.webp',
    dateStr: '2021-01-07',
  },
  {
    title: 'Product 8',
    tag: 'webアプリ',
    techs: ['aftereffects', 'c', 'cloudflare', 'css', 'docker', 'electron'],
    thumbnail: '/default/penguin.webp',
    dateStr: '2021-01-08',
  },
  {
    title: 'Product 9',
    tag: 'webアプリ',
    techs: ['aftereffects', 'c', 'cloudflare', 'css', 'docker', 'electron'],
    thumbnail: '/default/penguin.webp',
    dateStr: '2021-01-09',
  },
  {
    title: 'Product 10',
    tag: 'webアプリ',
    techs: ['aftereffects', 'c', 'cloudflare', 'css', 'docker', 'electron'],
    thumbnail: '/default/penguin.webp',
    dateStr: '2021-01-10',
  },
  {
    title: 'Product 11',
    tag: 'webアプリ',
    techs: ['aftereffects', 'c', 'cloudflare', 'css', 'docker', 'electron'],
    thumbnail: '/default/penguin.webp',
    dateStr: '2021-01-11',
  },
];

const ProductsSection = (): ReactElement => {
  return (
    <SectionLayout title="Products" className={styles.products}>
      {products.map((product) => (
        <ProductCard
          key={product.title}
          tag={product.tag}
          techs={product.techs}
          title={product.title}
          thumbnail={product.thumbnail}
          date={dayjs(product.dateStr)}
          w={300}
        />
      ))}
    </SectionLayout>
  );
};

export default ProductsSection;
