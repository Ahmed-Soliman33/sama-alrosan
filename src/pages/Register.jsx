import HeroSection from "@components/common/HeroSection";
import SEOHelmet from "@components/common/SEOHelmet";
import heroImage from "@assets/images/registration/interest-registration-hero.webp";

const Register = () => {
  return (
    <>
      <SEOHelmet
        title="سجل اهتمامك - سما الروسان العقارية"
        description="سجل اهتمامك بمشاريع سما الروسان العقارية واحصل على أحدث العروض والمشاريع العقارية الجديدة في المملكة العربية السعودية."
        keywords="سجل اهتمامك، تسجيل الاهتمام، عروض عقارية، مشاريع جديدة، سما الروسان، استثمار عقاري"
      />
      <HeroSection image={heroImage} overlay={false}>
        <h1 className="sr-only">سجل اهتمامك</h1>
      </HeroSection>
    </>
  );
};

export default Register;
