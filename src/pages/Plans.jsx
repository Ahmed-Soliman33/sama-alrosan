import HeroSection from "@components/common/HeroSection";
import heroImage from "@assets/images/plans/plans-page-hero.webp";

const Plans = () => {
  return (
    <HeroSection image={heroImage} overlay={false}>
      <h1 className="sr-only">المخططات</h1>
    </HeroSection>
  );
};

export default Plans;
