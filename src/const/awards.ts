import dayjs from 'dayjs';

import type { ListItemProps } from '@/components/shares/listItem';

export const AWARD: ListItemProps[] = [
  {
    date: dayjs('2020-10'),
    title: 'パソコン甲子園2020 いちまいの絵CG部門',
    type: '佳作',
    description: '食の裏に隠れた世界を表現したイラスト',
    link: 'https://web-ext.u-aizu.ac.jp/pc-concours/2020/final/f_cgaward.html',
    dateFormat: 'YYYY.MM',
  },
  {
    date: dayjs('2021-01'),
    title: 'SEIKA AWARD 2021',
    type: '入選',
    description: 'なんの特徴もない平凡な日常を表現した動画',
    link: 'https://youtu.be/ZVi7Ayouou0',
    dateFormat: 'YYYY.MM',
  },
  {
    date: dayjs('2021-09'),
    title: '高校生エンジニア体験',
    type: '一般公開',
    description: 'aiboの可愛い仕草をみながらすごろくをするアプリ',
    link: 'https://satooru.me/blog/product/59',
    dateFormat: 'YYYY.MM',
  },
  {
    date: dayjs('2023-06-18'),
    title: '技育CAMP キャラバンハッカソン vol.2',
    type: '最優秀賞',
    description: '紙を破いてPCを操作するアプリ',
  },
  {
    date: dayjs('2023-08-06'),
    title: '技育CAMP マンスリーハッカソン vol.7',
    type: '企業賞',
    description: '知っている単語から知らない単語を知れるアプリ',
  },
  {
    date: dayjs('2023-08-12'),
    title: '技育展 中部ブロック予選',
    type: '決勝進出',
    description: '技育展 中部ブロック予選',
  },
  {
    date: dayjs('2023-08-12'),
    title: 'Open hack U 2023 NAGOYA',
    type: '最優秀賞',
    description: 'テキストで簡単にアウトプット, 動画で気軽にインプットできるサービス',
  },
  {
    date: dayjs('2023-09-02'),
    title: '技育CAMP アドバンス vol.3',
    type: '企業賞',
    description: '紙を破いてPCを操作するアプリ',
  },
  {
    date: dayjs('2023-09-02'),
    title: '工科展',
    type: '優秀賞',
    description: 'Wi-Fiを使った混雑を知れるアプリ',
  },
];
