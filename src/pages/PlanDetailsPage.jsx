import SEOHelmet from "@components/common/SEOHelmet";
import { useParams } from "react-router-dom";

import HeroSection from "@components/common/HeroSection";

import alwa7a_hero from "@assets/images/plan-details/alwa7a/alwa7a-hero.webp";
import aldmam_hero from "@assets/images/plan-details/aldmam/aldmam-hero.webp";
import kharis_hero from "@assets/images/plan-details/kharis/kharis-hero.webp";
import alwa7a_plan from "@assets/images/plan-details/alwa7a/alwa7a-plan.webp";
import aldmam_plan from "@assets/images/plan-details/aldmam/aldmam-plan.webp";
import kharis_plan from "@assets/images/plan-details/kharis/kharis-plan.webp";

const PLANS = {
  الواحة: {
    id: "الواحة",
    title: "سما الروسان الواحة",
    hero: alwa7a_hero,
    plan: alwa7a_plan,
    residential_units: 1418,
    total_units: 81,
    total_area: 77860398,
    carousel_images: [""],
  },
  الدمام: {
    id: "الدمام",
    title: "سما الروسان طريق الدمام",
    hero: aldmam_hero,
    plan: aldmam_plan,
    residential_units: 754,
    total_units: 65,
    total_area: 800335.41,
    carousel_images: [""],
  },
  خريص: {
    id: "خريص",
    title: "سما الروسان طريق خريص",
    hero: kharis_hero,
    plan: kharis_plan,
    residential_units: 1118,
    total_units: 49,
    total_area: 109034271,
    carousel_images: [""],
  },
};

const PlanDetailsPage = () => {
  const params = useParams();
  const plan = PLANS[params.id];
  if (!plan) {
    return <div>المخطط غير متاح</div>;
  }

  return (
    <>
      <SEOHelmet
        title={plan.title}
        description={`تعرف على تاريخ وقصة نجاح ${plan.title}، الشركة الرائدة في التطوير العقاري بالمملكة العربية السعودية منذ أكثر من أربعة عقود.`}
        keywords={`${plan.title}، الشركة الرائدة في التطوير العقاري، التطوير العقاري، خبرة عقارية، السعودية`}
      />
      <HeroSection image={plan.hero} overlay={false}>
        <h1 className="sr-only">{plan.title}</h1>
      </HeroSection>
    </>
  );
};

export default PlanDetailsPage;
