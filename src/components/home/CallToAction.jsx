import Button from "@components/common/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useMediaQuery from "@hooks/useMediaQuery";

const CallToAction = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const onRegisterClick = () => {
    navigate("/register");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-primaryColor mx-auto flex max-w-[85%] min-w-[320px] items-center justify-between px-5 py-3 pl-10 shadow-md sm:max-w-[70%] md:max-w-[64%] md:py-4 md:pl-20 lg:max-w-[57%] xl:max-w-[47%] 2xl:gap-20 2xl:pl-14"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Button */}
      <Button
        onClick={onRegisterClick}
        className="cursor-pointer px-2 py-2 pt-7 text-base leading-tight font-bold text-white sm:px-4 sm:py-4 sm:text-lg md:py-5 lg:text-[1.5rem] xl:h-[5rem] xl:w-[20rem] xl:text-2xl 2xl:w-[22rem] 2xl:text-[2rem]"
        bgColor="bg-secondaryColor"
        animated={false}
      >
        <motion.span className="block">سجل اهتمامك الآن</motion.span>
      </Button>

      {/* Text Content */}
      <motion.div
        className="text-secondaryTextColor flex flex-col justify-center text-start"
        variants={itemVariants}
      >
        <motion.h2
          className="mb-1 pt-1 leading-tight font-bold sm:text-[1.2rem] lg:text-[1.5rem] xl:text-2xl 2xl:text-[1.7rem]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          مخططات سكنية
        </motion.h2>

        <motion.h2
          className="leading-tight font-bold sm:text-[1.2rem] lg:text-[1.5rem] xl:text-2xl 2xl:text-[1.7rem]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          مخططات تجارية
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default CallToAction;
