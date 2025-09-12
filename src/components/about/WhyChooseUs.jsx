import { motion } from "framer-motion";

const BOXES = [
  {
    title: "مواقع استراتيجية مدروسة النمو",
    padding: "px-[1.6rem] 2xl:px-1",
  },
  {
    title: "صكوك وترخيص واضح وموثوق",
    padding: "px-8 lg:px-12 xl:px-14",
  },
  {
    title: "مخططات متنوعة تناسب احتياجك",
    padding: "px-4",
  },
  {
    title: "بنية تحتية جاهزة للتسليم",
    padding: "px-10 md:px-7 lg:px-14",
  },
  {
    title: "شفافية في الأسعار والتفاصيل",
    padding: "px-4",
  },
];

const WhyChooseUs = () => {
  return (
    <motion.div
      className="mx-auto max-w-[90vw] pt-10 pb-30 md:pb-56 2xl:max-w-[80vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h2
          className="text-[2.1rem] font-bold sm:pt-3 sm:text-4xl lg:text-5xl xl:text-6xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          ليه تختار سما الروسان؟
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 items-center justify-center gap-x-8 gap-y-6 pt-8 sm:grid-cols-2 md:grid-cols-3 md:pt-16 lg:gap-x-12 lg:gap-y-8 xl:gap-x-20 xl:gap-y-14 2xl:gap-x-24"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
      >
        {BOXES.map((box, index) => (
          <motion.div
            key={index}
            className="relative mx-auto w-[95%] bg-[#F6F2EA] pt-2 text-center sm:w-full sm:pt-3 lg:min-h-32 xl:min-h-40"
            initial={{
              y: 40,
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.8 + index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="absolute top-[35%] -right-3 h-6 w-6 rotate-90 bg-[#D3A851] sm:top-[37%] sm:-right-4 sm:h-8 sm:w-8 lg:top-[40%] xl:top-1/3 xl:-right-6 xl:h-12 xl:w-12"
              initial={{
                scale: 0,
                rotate: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: 45,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 1 + index * 0.1,
                ease: "easeOut",
              }}
            />
            <motion.h3
              className={`py-2 text-[1.7rem] leading-10 font-bold sm:py-0 sm:pt-2 sm:text-[1.2rem] md:text-[1.3rem] lg:pt-6 lg:text-[1.6rem] xl:pt-8 xl:leading-12 2xl:text-4xl ${box.padding}`}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 1.2 + index * 0.1,
                ease: "easeOut",
              }}
            >
              {box.title}
            </motion.h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUs;
