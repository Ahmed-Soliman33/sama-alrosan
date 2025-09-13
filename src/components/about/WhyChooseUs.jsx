import { motion } from "framer-motion";

const BOXES = [
  {
    title: "مواقع استراتيجية مدروسة النمو",
    padding: "px-[1rem] 2xl:px-1",
  },
  {
    title: "صكوك وترخيص واضح وموثوق",
    padding: "px-4 lg:px-6 xl:px-7 2xl:px-11",
  },
  {
    title: "مخططات متنوعة تناسب احتياجك",
    padding: "px-2",
  },
  {
    title: "بنية تحتية جاهزة للتسليم",
    padding: "px-5 md:px-4 lg:px-8",
  },
  {
    title: "شفافية في الأسعار والتفاصيل",
    padding: "px-2",
  },
];

const WhyChooseUs = () => {
  return (
    <motion.div
      className="mx-auto px-5 pt-6 pb-20 sm:max-w-[85vw] md:pb-35 lg:max-w-[80vw] 2xl:max-w-[70vw]"
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
          className="text-[1.7rem] font-bold sm:pt-2 sm:text-[1.6rem] lg:text-[1.9rem] xl:text-[2.2rem]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          ليه تختار سما الروسان؟
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 items-center justify-center gap-x-4 gap-y-4 pt-7 sm:grid-cols-2 md:grid-cols-3 md:pt-14 lg:gap-x-6 lg:gap-y-5 xl:gap-x-6 xl:gap-y-7 2xl:gap-x-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
      >
        {BOXES.map((box, index) => (
          <motion.div
            key={index}
            className="relative mx-auto min-h-18 w-[80%] bg-[#F6F2EA] pt-1 text-center sm:w-[85%] sm:pt-4 lg:min-h-24 lg:pt-3 xl:min-h-28 xl:px-2 xl:pt-1"
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
              className="absolute top-[35%] -right-1 h-4 w-4 rotate-90 bg-[#D3A851] sm:top-[37%] sm:-right-2 sm:h-5 sm:w-5 lg:top-[40%] xl:top-1/3 xl:-right-3 xl:h-7 xl:w-7"
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
              className={`py-1 pt-4 text-[1.3rem] font-bold sm:py-0 sm:pt-1 sm:text-[1.2rem] md:leading-6 lg:pt-3 lg:text-[1.2rem] xl:pt-4 xl:text-[1.4rem] xl:leading-9 2xl:text-[1.6rem] ${box.padding}`}
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
