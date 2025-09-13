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
      className="bg-primaryColor mx-auto flex max-w-[70%] min-w-[320px] items-center justify-between px-5 py-2 shadow-md sm:max-w-[65%] sm:pl-10 md:max-w-[57%] lg:max-w-[52%] lg:pl-20 xl:max-w-[43%] xl:py-4 2xl:max-w-[35%] 2xl:gap-10 2xl:pl-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Button */}
      <Button
        onClick={onRegisterClick}
        className="cursor-pointer px-2 py-2 pt-3 text-[.95rem] leading-tight font-bold text-white sm:px-4 sm:py-4 sm:text-lg md:py-4 lg:text-[1.3rem] xl:h-[4.3rem] xl:w-[17rem] xl:text-2xl 2xl:w-[18rem] 2xl:text-[1.5rem]"
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
        <motion.h2 className="mb-1 pt-1 text-[.9rem] leading-tight font-bold sm:text-[1.2rem] 2xl:text-[1.3rem]">
          مخططات سكنية
        </motion.h2>

        <motion.h2 className="text-[.9rem] leading-tight font-bold sm:text-[1.2rem] 2xl:text-[1.3rem]">
          مخططات تجارية
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default CallToAction;
