import HeroSection from "@components/common/HeroSection";
import heroVideo from "@assets/videos/about/about-hero.webm";
import SEOHelmet from "@components/common/SEOHelmet";

const About = () => {
  return (
    <>
      <SEOHelmet
        title="من نحن - سما الروسان العقارية"
        description="تعرف على تاريخ وقصة نجاح سما الروسان العقارية، الشركة الرائدة في التطوير العقاري بالمملكة العربية السعودية منذ أكثر من أربعة عقود."
        keywords="من نحن، سما الروسان، تاريخ الشركة، التطوير العقاري، خبرة عقارية، السعودية"
      />
      <HeroSection video={heroVideo} overlay={false}>
        <h1 className="sr-only">من نحن</h1>
      </HeroSection>
    </>
  );
};

export default About;
