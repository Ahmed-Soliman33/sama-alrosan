import { motion } from "framer-motion";

import HeroSection from "@components/common/HeroSection";
import SEOHelmet from "@components/common/SEOHelmet";
import heroImage from "@assets/images/registration/interest-registration-hero.webp";
import RegistrationForm from "@components/common/RegistrationForm";

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

      <section className="mx-auto p-3 sm:max-w-7xl sm:p-8">
        {/* Header */}
        <motion.div
          className="mx-auto space-y-3 py-12 text-center sm:py-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h2
            className="text-[2rem] font-bold sm:pt-3 sm:text-4xl md:pt-5 xl:pt-8 xl:text-[2.5rem]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            نسعد بمساعدتك في اختيار المخطط الأنسب
          </motion.h2>
          <motion.p
            className="text-primaryTextColor/90 text-[1.1rem] sm:pt-1 sm:text-[1.4rem] xl:text-4xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            سجل بياناتك وسنتواصل معك بالتفاصيل
          </motion.p>
        </motion.div>

        <RegistrationForm />
      </section>
    </>
  );
};

export default Register;
