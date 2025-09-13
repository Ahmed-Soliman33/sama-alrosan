import { motion } from "framer-motion";
import banner_1 from "@assets/images/home/home-footer-banner-1.webp";
import banner_2 from "@assets/images/home/home-footer-banner-2.webp";
import banner_3 from "@assets/images/home/home-footer-banner-3.webp";
import { Skeleton } from "@components/ui/skeleton";

const BANNERS = [
  {
    id: 1,
    image: banner_1,
    title: "بنية تحتية مكتملة",
    className: "md:col-span-2 row-span-2",
  },
  {
    id: 2,
    image: banner_2,
    title: "إجراءات تملك سهلة",
    className: "",
  },
  {
    id: 3,
    image: banner_3,
    title: "مواقع تجارية حيوية",
    className: "",
  },
];

const FooterBannersSection = () => {
  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-8 py-20 md:grid-cols-3 md:pb-40 lg:gap-x-12 lg:gap-y-10 xl:max-h-[95vh] xl:gap-y-11">
      {BANNERS.map((banner) => (
        <div className={`${banner.className} overflow-hidden`} key={banner.id}>
          <motion.img
            src={banner.image}
            alt={banner.title}
            whileHover={{ scale: 1.06 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.25, 0, 1],
            }}
            className="w-full object-cover"
          />
          <h3 className="sr-only absolute bottom-8 left-1/2 -translate-x-1/2 text-lg font-semibold text-white md:text-2xl">
            {banner.title}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default FooterBannersSection;

export const FooterBannersSkeleton = () => {
  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-8 py-20 md:grid-flow-col md:pb-40 lg:gap-x-12 lg:gap-y-11">
      {BANNERS.map((banner) => (
        <div className={`${banner.className} overflow-hidden`} key={banner.id}>
          <Skeleton
            className={`${banner.id === 1 ? "h-[14.5rem] w-[100vw] md:h-[45vh] md:w-[65vw]" : "h-[14.5rem] w-[100vw] md:h-[20vh] md:w-[40vw]"} rounded-none`}
          />
          <h3 className="sr-only absolute bottom-8 left-1/2 -translate-x-1/2 text-lg font-semibold text-white md:text-2xl">
            {banner.title}
          </h3>
        </div>
      ))}
    </section>
  );
};
