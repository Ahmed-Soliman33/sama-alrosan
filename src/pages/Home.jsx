import HeroSection from "@components/common/HeroSection";
import heroImage from "@assets/images/home/home-hero.webp";
import SEOHelmet from "@components/common/SEOHelmet";
import ServiceIntro from "@components/home/ServiceIntro";
import CallToAction from "@components/home/CallToAction";

const Home = () => {
  return (
    <>
      <SEOHelmet
        title="سما الروسان العقارية - الرئيسية"
        description="منذ أكثر من أربعة عقود، تقدم سما الروسان العقارية مشاريع عقارية متكاملة ترفع جودة الحياة وتلبي طموحات الأفراد والشركات والمستثمرين في المملكة العربية السعودية."
        keywords="سما الروسان، العقارات، التطوير العقاري، السعودية، مشاريع عقارية، استثمار عقاري"
      />
      <div className="relative">
        <HeroSection image={heroImage} />

        <div className="abosolute top-1/2 left-1/2 z-10 -translate-y-[calc(75%-1.5rem)]">
          <CallToAction />
        </div>

        <ServiceIntro />
      </div>
      <ServiceIntro />
      <ServiceIntro />
    </>
  );
};

export default Home;
