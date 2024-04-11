import AbountSection from '@/components/sections/about';
import AwardsSection from '@/components/sections/awards';
import LinksSection from '@/components/sections/links';
import ProductsSection from '@/components/sections/products';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import WorksSection from '@/components/sections/works';

export default function Page() {
  return (
    <>
      <AbountSection />
      <LinksSection />
      <SkillsSection />
      <ProjectsSection />
      <WorksSection />
      <AwardsSection />
      <ProductsSection />
    </>
  );
}
