import dayjs from 'dayjs';

import { ExperienceProp } from '@/components/sections/experiences';

export const EXPERIENCES: ExperienceProp[] = [
  {
    description: 'システム工学研究会 入部',
    organization: 'SET',
    start: dayjs('2023.04.01'),
    location: '愛工大4号館別館 310',
    overview: 'システム工学研究会に入部',
    url: 'https://set1.ie.aitech.ac.jp/',
  },
  {
    description: '梶研究室に参加',
    organization: '梶研',
    start: dayjs('2023.04.01'),
    location: '愛工大4号館別館 108',
    overview: '梶研究室に参加',
    url: 'https://kajilab.net/',
    fill: false,
  },
  {
    description: '愛知工業大学 入学',
    organization: 'AIT',
    start: dayjs('2023.04.01'),
    location: '愛知県豊田市',
    overview: '愛知工業大学 情報科学科コンピューターシステム専攻 に入学',
    url: 'https://set1.ie.aitech.ac.jp/',
    fill: true,
  },
  {
    description: '情報システム部 入部',
    organization: 'MISC',
    start: dayjs('2021.11.01'),
    end: dayjs('2023.03.01'),
    location: '名電高校415教室',
    overview: '情報システム(元システムコンピューター)部に転部。なんか部長なってた',
    url: 'https://misc-mdn.dev/',
  },
  {
    description: 'メカニカルアーツ部 参加',
    organization: 'メカ部',
    start: dayjs('2020.10.01'),
    end: dayjs('2023.03.01'),
    location: '名電高校淳和記念館',
    overview: 'メカニカルアーツ部に参加。(実質掛け持ち)',
    url: 'https://www.meiden.ed.jp/club/detail.html?id=380',
  },
  {
    description: '情報デザイン部 入部',
    organization: 'AMIDC',
    start: dayjs('2020.07.01'),
    end: dayjs('2022.09.01'),
    location: '名電高校224教室',
    overview: '情報デザイン部に入部。',
    url: 'https://meidenid.com/',
  },
  {
    description: '名電高校入学',
    organization: 'Meiden H.S.',
    start: dayjs('2020.04.01'),
    end: dayjs('2023.03.01'),
    location: '愛知県名古屋市',
    overview: '情報科学科に入学した。',
    url: 'https://www.meiden.ed.jp/',
    fill: true,
  },
];
