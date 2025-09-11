import { motion } from "framer-motion";

const BOXES = [
  {
    title: "الهدف",
    subtitles: ["تيســـــــــــــــــــــــــــــــير", "تملك الأراضي"],
  },
  {
    title: "الرؤية",
    subtitles: ["مـــــــــــدن نابضة", "بالحيــــــــــــــــــــــــاة"],
  },
  {
    title: "الرسالة",
    subtitles: ["حلــــــــــــــــــــــــــــــــول", "عقارية موثوقة"],
  },
];

const AboutSection = () => {
  return (
    <motion.div
      className="min-h-screen px-1.5 py-16 sm:px-6 md:py-24 lg:px-10 lg:py-32 xl:px-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="mx-auto space-y-3 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h2
          className="text-[2rem] font-bold sm:pt-3 sm:text-4xl md:pt-5 xl:pt-8 xl:text-5xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          سما الروسان شركة عقارية تقدّم مخططات سكنية وتجارية مختارة بعناية، مع
          بنية تحتية مكتملة وخطوات تملك سهلة.
        </motion.h2>
        <motion.p
          className="text-primaryTextColor/90 text-[1.1rem] sm:pt-2 sm:text-[1.4rem] xl:text-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          نركّز على المواقع الواعدة، الشفافية في الطرح، وخدمة تساعدك من أول
          اتصال حتى استلام أرضك بثقة.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-22 flex flex-wrap justify-center gap-6 sm:gap-4 lg:gap-16 2xl:gap-22"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        {BOXES.map(({ title, subtitles }, index) => (
          <motion.div
            key={index}
            className="bg-primaryTextColor text-secondaryTextColor relative my-4 text-center md:my-8"
            initial={{
              y: 60,
              opacity: 0,
              scale: 0.9,
              rotateY: -15,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
              rotateY: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1 + index * 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h3
              className="px-6 pb-0.5 text-[2.1rem] font-bold sm:pt-3 sm:text-4xl md:pt-5 xl:pt-8 xl:text-5xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.2 + index * 0.2,
                ease: "easeOut",
              }}
            >
              {title}
            </motion.h3>
            <motion.div
              className="absolute left-0 w-full border-b-[6px] border-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.4 + index * 0.2,
                ease: "easeOut",
              }}
            />
            <motion.ul
              className="mt-2 space-y-1 px-3 py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.6 + index * 0.2,
                ease: "easeOut",
              }}
            >
              {subtitles.map((subtitle, subIndex) => (
                <motion.li
                  key={subIndex}
                  className={`${subIndex === 0 ? "text-secondaryColor text-[2.1rem]" : "text-secondaryTextColor text-[1.9rem]"} font-bold sm:pt-3 sm:text-4xl md:pt-5 xl:pt-8 xl:text-5xl`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.8 + index * 0.2 + subIndex * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  {subtitle}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
