import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import useMediaQuery from "@hooks/useMediaQuery";
import { Skeleton } from "@components/ui/skeleton";

const CarouselSection = ({ images = [] }) => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const carouselImages = images;

  return (
    <div className="relative mx-auto w-full px-2 pt-12 pb-8 md:pt-20 md:pb-26 lg:max-w-7xl">
      <style>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 40px !important;
          height: 40px !important;
          background: transparent !important;
          color: #000 !important;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          content: "" !important;
        }

        .custom-prev-arrow,
        .custom-next-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-prev-arrow:hover,
        .custom-next-arrow:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-50%) scale(1.1);
        }

        .custom-prev-arrow {
          left: 30px;
        }

        .custom-next-arrow {
          right: 30px;
        }
      `}</style>

      {/* Carousel Container */}
      <div className="relative md:px-4 lg:px-24">
        {/* Custom Previous Button */}
        {!isMobile && (
          <>
            <div className="custom-prev-arrow swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37.704"
                height="103.452"
                viewBox="0 0 37.704 103.452"
              >
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M943.726,2927.668l-33.6,54.7,33.6,46.535"
                  transform="translate(-907.726 -2926.621)"
                  fill="none"
                  stroke={isTablet ? "#fff" : "#000"}
                  strokeWidth="5"
                />
              </svg>
            </div>

            {/* Custom Next Button */}
            <div className="custom-next-arrow swiper-button-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37.704"
                height="103.452"
                viewBox="0 0 37.704 103.452"
              >
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M943.726,2927.668l-33.6,54.7,33.6,46.535"
                  transform="translate(945.43 3030.073) rotate(180)"
                  fill="none"
                  stroke={isTablet ? "#fff" : "#000"}
                  strokeWidth="5"
                />
              </svg>
            </div>
          </>
        )}

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper overflow-hidden"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Optional: Add a subtle gradient overlay for better visibility of navigation */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselSection;

// Carousel Skeleton Component
export const CarouselSectionSkeleton = () => {
  return (
    <motion.div
      className="relative mx-auto w-full px-4 pt-20 pb-26 lg:max-w-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative md:px-4 lg:px-24">
        {/* Skeleton for navigation buttons */}
        <div className="absolute top-1/2 left-8 z-10 -translate-y-1/2 transform">
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
        <div className="absolute top-1/2 right-8 z-10 -translate-y-1/2 transform">
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>

        {/* Main carousel skeleton */}
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Skeleton className="absolute inset-0 h-full w-full rounded-lg" />

          {/* Skeleton for pagination dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
            <Skeleton className="h-2 w-2 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
