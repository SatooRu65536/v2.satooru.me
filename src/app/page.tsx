import AbountSection from '@/components/sections/about';
import AwardsSection from '@/components/sections/awards';
import LinksSection from '@/components/sections/links';
import RecentPostsSection from '@/components/sections/posts';
import ProductsSection from '@/components/sections/products';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import WorksSection from '@/components/sections/works';
import { getArticles } from '@/utils/articles';

export default function Page() {
  const articles = getArticles();

  return (
    <>
      <AbountSection />
      <LinksSection />
      <SkillsSection />
      <ProjectsSection />
      <WorksSection />
      <AwardsSection />
      <RecentPostsSection articles={articles.slice(0, 6)} />
      <ProductsSection />
    </>
  );
}
