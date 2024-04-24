import { IconKey } from '@/components/shares/icon';

interface Link {
  link: string;
  iconKey: IconKey;
  name: string;
}

export const LINKS: Link[] = [
  {
    link: 'https://x.com/SatooRu65536',
    iconKey: 'x',
    name: '@SatooRu65536',
  },
  {
    link: 'http://github.com/SatooRu65536',
    iconKey: 'github',
    name: '@SatooRu65536',
  },
];
