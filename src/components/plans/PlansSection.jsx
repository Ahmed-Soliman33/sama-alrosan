import { motion } from "framer-motion";

import alwa7a from "@assets/images/home/alwa7a.webp";
import aldmam from "@assets/images/home/aldmam.webp";
import kharis from "@assets/images/home/kharis.webp";
import gof from "@assets/images/home/gof.webp";
import borg_mesk from "@assets/images/home/borg-mesk.webp";
import { SwiperSlide } from "swiper/react";
import Heading from "@components/common/Heading";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@components/ui/skeleton";

const PROJECTS = [
  {
    id: "الواحة",
    title: "الواحة",
    image: alwa7a,
  },
  {
    id: "طريق الدمام",
    title: "طريق الدمام",
    image: aldmam,
  },
  {
    id: "طريق خريص",
    title: "طريق خريص",
    image: kharis,
  },
  {
    id: "الجوف",
    title: "الجوف",
    image: gof,
  },
  {
    id: "برج مسك",
    title: "برج مسك",
    image: borg_mesk,
  },
];

const PlansSection = () => {
  const navigate = useNavigate();

  const handlePlanClick = (projectId) => {
    navigate(`/plans/${projectId}`);
  };

  return (
    <section className="px-5 pt-24 pb-36 md:px-14 lg:px-20 xl:px-28">
      <div className="mb-14 text-center">
        <Heading>اكتشف مخططاتنا</Heading>
        <p className="text-primaryTextColor/90 pt-2 text-[2.1rem] sm:text-3xl lg:text-3xl xl:text-4xl">
          جودة تبني مستقبلك، تملّك بثقة اليوم
        </p>
      </div>

      <div className="grid grid-cols-2 justify-center gap-3 sm:gap-10 md:grid-cols-3 md:gap-5 lg:gap-14 xl:grid-cols-[repeat(auto-fit,minmax(330px,1fr))] 2xl:grid-cols-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group cursor-pointer"
            onClick={() => {
              handlePlanClick(project.id);
            }}
          >
            <div className="relative min-h-[20rem] overflow-hidden sm:min-h-[30rem]">
              {/* Project Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              />

              {/* Status Badge */}
              <div className="absolute top-[1.5px] left-[1.5px] z-10">
                <motion.div
                  className="bg-secondaryColor px-1 py-[3px] text-[.67rem] font-bold text-white md:px-3 md:py-1.5 md:text-[.75rem]"
                  whileHover={{ scale: 1.05 }}
                >
                  متاح للبيع
                </motion.div>
              </div>

              {/* Content */}
              <div className="absolute right-0 bottom-0 left-0 p-6">
                <motion.h3
                  className="group-hover:text-secondaryColor sr-only mb-2 text-xl font-bold text-white transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {project.title}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;

export const PlansSectionSkeleton = () => {
  return (
    <section className="px-5 pt-24 pb-36 md:px-14 lg:px-20 xl:px-28">
      <div className="mb-14 space-y-8 text-center">
        <div className="relative mx-auto min-h-[20px] w-[32rem]">
          <Skeleton className="absolute inset-0" />
        </div>
        <div className="relative mx-auto min-h-[20px] w-[45rem]">
          <Skeleton className="absolute inset-0" />
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center gap-3 sm:gap-10 md:grid-cols-3 md:gap-5 lg:gap-14 xl:grid-cols-[repeat(auto-fit,minmax(330px,1fr))] 2xl:grid-cols-4">
        {PROJECTS.map((item) => (
          <div
            key={item.id}
            className="relative min-h-[20rem] overflow-hidden sm:min-h-[30rem]"
          >
            <Skeleton className="absolute inset-0" />
          </div>
        ))}
      </div>
    </section>
  );
};
