import HeroSection from "@components/common/HeroSection";
import SEOHelmet from "@components/common/SEOHelmet";
import heroImage from "@assets/images/plans/plans-page-hero.webp";

const Plans = () => {
  return (
    <>
      <SEOHelmet
        title="المخططات - سما الروسان العقارية"
        description="اكتشف مخططاتنا العقارية المتنوعة والمشاريع السكنية والتجارية المبتكرة من سما الروسان العقارية في المملكة العربية السعودية."
        keywords="المخططات، مشاريع عقارية، مخططات سكنية، مخططات تجارية، سما الروسان، العقارات السعودية"
      />
      <HeroSection image={heroImage} overlay={false}>
        <h1 className="sr-only">المخططات</h1>
      </HeroSection>
    </>
  );
};

export default Plans;
