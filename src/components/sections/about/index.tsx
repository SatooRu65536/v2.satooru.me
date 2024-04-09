import { ReactElement } from 'react';

import Title from './title';

import SectionLayout from '@/layouts/section';

const AbountSection = (): ReactElement => {
  return (
    <SectionLayout title={<Title />} align="left" underline>
      <p>
        {'　'}名古屋の大学生。 プログラミングが好きで主にweb開発をしています。
        フロントエンドが中心ですが、必要に応じてバックエンドもやります。夢はペンギンと同居すること。
        お世話は面倒なので、いずれペンギン型ロボットが誕生することを願っています。 本名ではない。
      </p>
    </SectionLayout>
  );
};

export default AbountSection;
