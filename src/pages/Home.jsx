import HeroSection from "@components/common/HeroSection";
import heroImage from "@assets/images/home/home-hero.webp";
import heroVideo from "@assets/videos/home/home-hero.webm";
import SEOHelmet from "@components/common/SEOHelmet";
import ServiceIntro from "@components/home/ServiceIntro";
import CallToAction from "@components/home/CallToAction";
import ServicesSection from "@components/home/ServicesSection";
import { DiscoverOurPlansSkeleton } from "@components/home/DiscoverOurPlans";
import { lazy, Suspense } from "react";
import { FooterBannersSkeleton } from "@components/home/FooterBannersSection";

const FooterBannersSection = lazy(
  () => import("@components/home/FooterBannersSection"),
);
const DiscoverOurPlans = lazy(
  () => import("@components/home/DiscoverOurPlans"),
);

const Home = () => {
  return (
    <>
      <SEOHelmet
        title="سما الروسان العقارية - الرئيسية"
        description="منذ أكثر من أربعة عقود، تقدم سما الروسان العقارية مشاريع عقارية متكاملة ترفع جودة الحياة وتلبي طموحات الأفراد والشركات والمستثمرين في المملكة العربية السعودية."
        keywords="سما الروسان، العقارات، التطوير العقاري، السعودية، مشاريع عقارية، استثمار عقاري"
      />
      <div className="relative">
        <HeroSection image={heroImage} video={heroVideo} />

        <div className="abosolute top-1/2 left-1/2 z-10 -translate-y-[calc(75%-1.5rem)]">
          <CallToAction />
        </div>

        <ServiceIntro />
      </div>

      <ServicesSection />

      <Suspense fallback={<DiscoverOurPlansSkeleton />}>
        <DiscoverOurPlans />
      </Suspense>

      <div className="h-[100vh] text-center"></div>

      <Suspense fallback={<FooterBannersSkeleton />}>
        <FooterBannersSection />
      </Suspense>
    </>
  );
};

export default Home;
