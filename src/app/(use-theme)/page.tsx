import AbountSection from '@/components/sections/About';
import AwardsSection from '@/components/sections/Awards';
import ExperiencesSection from '@/components/sections/Experiences';
import LinksSection from '@/components/sections/Links';
import RecentPostsSection from '@/components/sections/Posts';
import ProductsSection from '@/components/sections/Products';
import ProjectsSection from '@/components/sections/Projects';
import SkillsSection from '@/components/sections/Skills';
import WorksSection from '@/components/sections/Works';
import { articles, products } from '@/utils/articles';

export default function Page() {
  return (
    <>
      <AbountSection />
      <LinksSection />
      <SkillsSection />
      <ProjectsSection />
      <WorksSection />
      <ExperiencesSection />
      <AwardsSection />
      <RecentPostsSection articles={articles.slice(0, 6)} />
      <ProductsSection articles={products} />
    </>
  );
}
