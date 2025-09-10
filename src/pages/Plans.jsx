import HeroSection from "@components/common/HeroSection";
import SEOHelmet from "@components/common/SEOHelmet";
import heroImage from "@assets/images/plans/plans-page-hero.webp";
import { PlansSectionSkeleton } from "@components/plans/PlansSection";
import { lazy, Suspense } from "react";

const PlansSection = lazy(() => import("@components/plans/PlansSection"));

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

      <Suspense fallback={<PlansSectionSkeleton />}>
        <PlansSection />
      </Suspense>
    </>
  );
};

export default Plans;
