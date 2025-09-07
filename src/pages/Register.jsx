import HeroSection from "@components/common/HeroSection";
import heroImage from "@assets/images/registration/interest-registration-hero.webp";

const Register = () => {
  return (
    <HeroSection image={heroImage} overlay={false}>
      <h1 className="sr-only">المخططات</h1>
    </HeroSection>
  );
};

export default Register;
