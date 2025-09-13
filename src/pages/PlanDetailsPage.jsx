// React imports
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

// Common components
import SEOHelmet from "@components/common/SEOHelmet";
import HeroSection from "@components/common/HeroSection";
import { ImageSectionSkeleton } from "@components/common/ImageSection";
import Button from "@components/common/Button";
import PlanStatistics from "@components/plan-details/PlanStatistics";

// Plan-specific components
import { CarouselSectionSkeleton } from "@components/plan-details/CarouselSection";

// Hero images
import alwa7a_hero from "@assets/images/plan-details/alwa7a/alwa7a-hero.webp";
import aldmam_hero from "@assets/images/plan-details/aldmam/aldmam-hero.webp";
import kharis_hero from "@assets/images/plan-details/kharis/kharis-hero.webp";

// Plan images
import alwa7a_plan from "@assets/images/plan-details/alwa7a/alwa7a-plan.webp";
import aldmam_plan from "@assets/images/plan-details/aldmam/aldmam-plan.webp";
import kharis_plan from "@assets/images/plan-details/kharis/kharis-plan.webp";

import carousel_image1 from "@assets/images/plan-details/carousel-images/1.webp";
import carousel_image2 from "@assets/images/plan-details/carousel-images/2.webp";
import carousel_image3 from "@assets/images/plan-details/carousel-images/3.webp";
import RegistrationForm from "@components/common/RegistrationForm";

const PLANS = {
  الواحة: {
    id: "الواحة",
    title: "سما الروسان الواحة",
    hero: alwa7a_hero,
    plan: alwa7a_plan,
    residential_units: 1418,
    total_units: 81,
    total_area: 77860398,
    carousel_images: [carousel_image1, carousel_image2, carousel_image3],
    mapLink: "",
  },
  الدمام: {
    id: "الدمام",
    title: "سما الروسان طريق الدمام",
    hero: aldmam_hero,
    plan: aldmam_plan,
    residential_units: 754,
    total_units: 65,
    total_area: 800335.41,
    carousel_images: [carousel_image1, carousel_image2, carousel_image3],
    mapLink: "",
  },
  خريص: {
    id: "خريص",
    title: "سما الروسان طريق خريص",
    hero: kharis_hero,
    plan: kharis_plan,
    residential_units: 1118,
    total_units: 49,
    total_area: 109034271,
    carousel_images: [carousel_image1, carousel_image2, carousel_image3],
    mapLink: "",
  },
};

const ImageSection = lazy(() => import("@components/common/ImageSection"));
const CarouselSection = lazy(
  () => import("@components/plan-details/CarouselSection"),
);

const PlanDetailsPage = () => {
  const params = useParams();
  const plan = PLANS[params.id];
  if (!plan) {
    return <PlanPageNotFound />;
  }

  const goToMapHandler = () => {
    location.assign(plan.mapLink);
  };

  return (
    <>
      <SEOHelmet
        title={`مخطط عقاري | ${plan.title}`}
        description={`تعرف على تاريخ وقصة نجاح ${plan.title}، الشركة الرائدة في التطوير العقاري بالمملكة العربية السعودية منذ أكثر من أربعة عقود.`}
        keywords={`${plan.title}، الشركة الرائدة في التطوير العقاري، التطوير العقاري، خبرة عقارية، السعودية`}
      />
      <HeroSection height="min-h-[45vh]" image={plan.hero} overlay={false}>
        <h1 className="sr-only">{plan.title}</h1>
      </HeroSection>

      <div className="mx-auto mt-6 mb-4 w-full px-4 sm:mt-8 sm:mb-6 lg:mt-12 lg:mb-10 lg:px-10 xl:px-16">
        <div className="flex justify-end">
          <Button
            bgColor="bg-primaryTextColor"
            className="text-secondaryTextColor px-2 pt-1.5 pb-1.5 text-[0.8rem] font-bold sm:text-sm md:px-4 md:text-base lg:text-[1rem] xl:text-[1.1rem]"
            onClick={goToMapHandler}
            initialHeight={85}
          >
            اطلع على الموقع في الخريطة
          </Button>
        </div>
      </div>

      <Suspense fallback={<ImageSectionSkeleton />}>
        <ImageSection
          image={plan.plan}
          alt={`مخطط ${plan.title}`}
          sectionClasses="relative max-h-[750px] overflow-hidden"
        />
      </Suspense>

      <PlanStatistics plan={plan} />

      <Suspense fallback={<CarouselSectionSkeleton />}>
        <CarouselSection images={plan.carousel_images} />
      </Suspense>

      <div className="mb-26 px-5 sm:px-10 md:mb-32 lg:px-30 xl:px-50">
        <RegistrationForm visibleFields={["phone", "name", "planType"]} />
      </div>
    </>
  );
};

export default PlanDetailsPage;

const PlanPageNotFound = () => {
  return (
    <div className="bg-primaryColor flex min-h-screen items-center justify-center bg-gradient-to-br p-4">
      <div className="w-full max-w-md bg-[#F7F5ED] p-8 text-center shadow-md">
        {/* Icon */}
        <div className="mb-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg
              className="h-10 w-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          المخطط غير متاح
        </h1>

        {/* Description */}
        <p className="mb-6 leading-relaxed text-gray-600">
          عذراً، المخطط المطلوب غير متوفر حالياً أو قد يكون الرابط غير صحيح.
        </p>

        {/* Action Button */}
        <Button
          bgColor="bg-primaryTextColor"
          className="text-secondaryTextColor px-6 py-3 font-semibold"
          animated={false}
          onClick={() => window.history.back()}
        >
          العودة للخلف
        </Button>

        {/* Alternative Link */}
        <div className="mt-4">
          <a
            href="/plans"
            className="text-sm font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
          >
            تصفح جميع المخططات المتاحة
          </a>
        </div>
      </div>
    </div>
  );
};
