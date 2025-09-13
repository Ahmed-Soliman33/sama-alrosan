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
      className="mx-auto min-h-[80vh] px-5 py-16 sm:px-10 md:py-14 lg:px-14 lg:py-24 xl:max-w-[80%] 2xl:max-w-[75%] 2xl:px-24"
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
          className="pt-2 text-[1.4rem] font-bold sm:pt-3 sm:text-2xl md:pt-5 md:text-[1.9rem] lg:text-[2rem] xl:pt-8 xl:text-[2.3rem] 2xl:text-[2.5rem]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          سما الروسان شركة عقارية تقدّم مخططات سكنية وتجارية مختارة بعناية، مع
          بنية تحتية مكتملة وخطوات تملك سهلة.
        </motion.h2>
        <motion.p
          className="text-primaryTextColor/90 text-[0.92rem] sm:pt-2 sm:text-[1.1rem] md:text-[1.4rem] xl:text-[1.6rem]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          نركّز على المواقع الواعدة، الشفافية في الطرح، وخدمة تساعدك من أول
          اتصال حتى استلام أرضك بثقة.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-18 flex flex-wrap justify-center gap-4 sm:gap-3 md:gap-x-10 lg:gap-12 2xl:gap-17"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        {BOXES.map(({ title, subtitles }, index) => (
          <motion.div
            key={index}
            className="bg-secondaryColor text-secondaryTextColor relative my-3 w-[68%] text-center md:w-auto lg:my-6"
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
            }}
          >
            <motion.h3
              className="px-4 text-[1.7rem] font-bold sm:py-2 sm:text-[1.7rem] md:py-2 xl:py-4 xl:text-[2rem]"
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
              className="absolute left-0 w-full border-b-[4px] border-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.4 + index * 0.2,
                ease: "easeOut",
              }}
            />
            <motion.ul
              className="mt-2 space-y-1 px-7 py-8"
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
                  className={`${subIndex === 0 ? "text-primaryTextColor text-[1.7rem]" : "text-secondaryTextColor text-[1.5rem]"} font-bold sm:text-[1.7rem] xl:text-[2rem]`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.8 + index * 0.2 + subIndex * 0.1,
                    ease: "easeOut",
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
