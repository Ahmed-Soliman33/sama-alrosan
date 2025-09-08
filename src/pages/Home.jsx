import HeroSection from "@components/common/HeroSection";
import heroImage from "@assets/images/home/home-hero.webp";
import SEOHelmet from "@components/common/SEOHelmet";

const Home = () => {
  return (
    <>
      <SEOHelmet
        title="سما الروسان العقارية - الرئيسية"
        description="منذ أكثر من أربعة عقود، تقدم سما الروسان العقارية مشاريع عقارية متكاملة ترفع جودة الحياة وتلبي طموحات الأفراد والشركات والمستثمرين في المملكة العربية السعودية."
        keywords="سما الروسان، العقارات، التطوير العقاري، السعودية، مشاريع عقارية، استثمار عقاري"
      />
      <HeroSection image={heroImage} />{" "}
    </>
  );
};

export default Home;
