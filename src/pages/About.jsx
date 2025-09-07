import HeroSection from "@components/common/HeroSection";
import heroVideo from "@assets/videos/about/about-hero.webm";

const About = () => {
  return (
    <HeroSection video={heroVideo} overlay={false}>
      <h1 className="sr-only">من نحن</h1>
    </HeroSection>
  );
};

export default About;
