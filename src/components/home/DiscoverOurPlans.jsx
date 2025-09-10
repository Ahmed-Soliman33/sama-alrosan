import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { Skeleton } from "@/components/ui/skeleton";

import alwa7a from "@assets/images/home/alwa7a.webp";
import aldmam from "@assets/images/home/aldmam.webp";
import kharis from "@assets/images/home/kharis.webp";
import gof from "@assets/images/home/gof.webp";
import borg_mesk from "@assets/images/home/borg-mesk.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Heading from "@components/common/Heading";

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

const DiscoverOurPlans = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePlanClick = (projectId) => {
    console.log("Clicked project ID:", projectId);
  };

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading className="text-primaryTextColor my-4">
            اكتشف مخططاتنا
          </Heading>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-bullet-custom",
              bulletActiveClass: "swiper-bullet-active-custom",
              renderBullet: function (index, className) {
                return `<span class="${className} cursor-pointer transition-all duration-300 h-[3px] w-12 bg-[#1A1E24]/30 hover:bg-gray-500/50 block"></span>`;
              },
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 44,
              },
              1536: {
                slidesPerView: 4,
                spaceBetween: 54,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          >
            {PROJECTS.map((project, index) => (
              <SwiperSlide key={project.id}>
                <motion.div
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
                  className="group"
                  onClick={() => {
                    handlePlanClick(project.id);
                  }}
                >
                  <div className="relative h-[28rem] overflow-hidden">
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

                    {/* Decorative Elements */}
                    <div className="bg-secondaryColor/10 absolute top-0 left-0 h-20 w-20 -translate-x-10 -translate-y-10 rounded-full transition-transform duration-500 group-hover:scale-150" />
                    <div className="absolute right-0 bottom-0 h-16 w-16 translate-x-8 translate-y-8 rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-125" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx="true">{`
        .swiper-bullet-custom {
          background: #1a1e24 !important;
          opacity: 0.3 !important;
          width: 48px !important;
          height: 3px !important;
          border-radius: 9999px !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
          display: inline-block !important;
        }

        .swiper-bullet-active-custom {
          background: #1a1e24 !important;
          opacity: 1 !important;
        }

        .swiper-pagination {
          position: relative !important;
          margin-top: 32px !important;
        }

        .mySwiper {
          padding-bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default DiscoverOurPlans;

export const DiscoverOurPlansSkeleton = () => {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header Skeleton */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-8 w-48 animate-pulse rounded-md bg-gray-300"></div>
        </div>

        {/* Carousel Skeleton */}
        <div>
          {/* Desktop View - 4 cards */}
          <div className="hidden xl:grid xl:grid-cols-4 xl:gap-11">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <div className="h-[28rem] w-full animate-pulse rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-200 to-gray-300 shadow-sm">
                  {/* محاكاة الـ badge */}
                  <div className="absolute top-2 left-2 h-6 w-16 animate-pulse rounded bg-gray-400"></div>
                  {/* محاكاة المحتوى السفلي */}
                  <div className="absolute right-6 bottom-6 left-6 space-y-2">
                    <div className="h-4 w-3/4 animate-pulse rounded bg-gray-400"></div>
                    <div className="h-3 w-1/2 animate-pulse rounded bg-gray-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large Desktop View - 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4 xl:hidden">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <div className="relative h-[28rem] w-full animate-pulse rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-200 to-gray-300 shadow-sm">
                  <div className="absolute top-2 left-2 h-6 w-16 animate-pulse rounded bg-gray-400"></div>
                  <div className="absolute right-6 bottom-6 left-6 space-y-2">
                    <div className="h-4 w-3/4 animate-pulse rounded bg-gray-400"></div>
                    <div className="h-3 w-1/2 animate-pulse rounded bg-gray-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet View - 2 cards */}
          <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4 lg:hidden">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <div className="relative h-[28rem] w-full animate-pulse rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-200 to-gray-300 shadow-sm">
                  <div className="absolute top-2 left-2 h-6 w-16 animate-pulse rounded bg-gray-400"></div>
                  <div className="absolute right-6 bottom-6 left-6 space-y-2">
                    <div className="h-4 w-3/4 animate-pulse rounded bg-gray-400"></div>
                    <div className="h-3 w-1/2 animate-pulse rounded bg-gray-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - 1 card */}
          <div className="grid grid-cols-1 gap-4 sm:hidden">
            <div className="space-y-3">
              <div className="relative h-[28rem] w-full animate-pulse rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-200 to-gray-300 shadow-sm">
                <div className="absolute top-2 left-2 h-6 w-16 animate-pulse rounded bg-gray-400"></div>
                <div className="absolute right-6 bottom-6 left-6 space-y-2">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-400"></div>
                  <div className="h-3 w-1/2 animate-pulse rounded bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots Skeleton */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`h-[3px] animate-pulse rounded-full bg-gray-400 ${
                index === 0 ? "w-12 opacity-100" : "w-12 opacity-30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
