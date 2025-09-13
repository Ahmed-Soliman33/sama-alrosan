import HeroSection from "@components/common/HeroSection";
import heroVideo from "@assets/videos/about/about-hero.webm";
import SEOHelmet from "@components/common/SEOHelmet";
import AboutSection from "@components/about/AboutSection";
import WhyChooseUs from "@components/about/WhyChooseUs";

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
      <section
        className="relative bg-[length:45rem_auto] bg-[0px_445px] bg-no-repeat sm:bg-[length:80rem_auto] sm:bg-[0px_140px] xl:bg-[length:auto_95%] xl:bg-[0px_30px]"
        style={{
          backgroundImage: "url('/about_page_pattern.webp')",
        }}
      >
        <AboutSection />
        <WhyChooseUs />
      </section>
    </>
  );
};

export default About;
