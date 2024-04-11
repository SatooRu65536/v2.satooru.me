import AbountSection from '@/components/sections/about';
import AwardsSection from '@/components/sections/awards';
import LinksSection from '@/components/sections/links';
import ProductsSection from '@/components/sections/products';
import SkillsSection from '@/components/sections/skills';

export default function Page() {
  return (
    <>
      <AbountSection />
      <LinksSection />
      <SkillsSection />
      <ProductsSection />
      <AwardsSection />
    </>
  );
}
