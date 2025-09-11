import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";

// Social links array
const socialLinks = [
  {
    href: "#",
    icon: (
      <FaLinkedinIn className="h-[1.4rem] w-[1.5rem] text-white transition-colors sm:h-[1.5rem] sm:w-[1.6rem] lg:h-[1.8rem] lg:w-[1.9rem]" />
    ),
    label: "LinkedIn",
  },
  {
    href: "#",
    icon: (
      <FaXTwitter className="h-[1.4rem] w-[1.5rem] text-white transition-colors sm:h-[1.5rem] sm:w-[1.6rem] lg:h-[1.8rem] lg:w-[1.9rem]" />
    ),
    label: "Twitter",
  },
  {
    href: "#",
    icon: (
      <FaInstagram className="h-[1.4rem] w-[1.5rem] text-white transition-colors sm:h-[1.5rem] sm:w-[1.6rem] lg:h-[1.8rem] lg:w-[1.9rem]" />
    ),
    label: "Instagram",
  },
];

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.footer
      className="bg-primaryColor text-secondaryTextColor relative min-h-[423px] overflow-hidden bg-[url('/footer_pattern.webp')] bg-[length:50rem_auto] bg-[0px_245px] bg-no-repeat sm:bg-[length:80rem_auto] sm:bg-[0px_140px] xl:bg-[length:120rem_auto] xl:bg-[0px_0px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Content */}
      <div className="relative z-10 px-6 pt-6 pb-12 lg:px-18 2xl:px-22">
        {/* Logo Section */}
        <motion.div
          className="my-4 flex w-[10rem] max-w-[12rem] justify-start xl:w-[12rem]"
          variants={itemVariants}
        >
          <Logo
            width="100%"
            height="100%"
            className="brightness-0 invert filter"
          />
        </motion.div>

        {/* Contact Info, Address, Customer Service, and Social Media */}
        <div className="grid grid-cols-2 items-center justify-start gap-x-8 gap-y-10 sm:max-w-[70%] 2xl:max-w-1/2">
          {/* Address */}
          <motion.div className="text-start" variants={itemVariants}>
            <h3 className="text-[.95rem] font-bold text-white md:text-base lg:text-lg">
              مقرنا
            </h3>
            <p className="text-secondaryTextColor text-[.76rem] leading-relaxed sm:text-[.95rem] md:text-base lg:lg:text-[1.1rem]">
              المملكة العربية السعودية - الرياض
              <br />
              حي القدس طريق الدائري الشرقي
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-center text-start"
            variants={itemVariants}
          >
            <h3 className="text-[.95rem] font-bold text-white md:text-base lg:text-lg">
              البريد الإلكتروني
            </h3>
            <motion.a
              href="mailto:info@smaalrosan.com"
              className="text-secondaryTextColor flex items-center gap-2 pr-1 text-[.95rem] transition-colors duration-300 sm:text-[1.1rem]"
              whileHover={{ x: -5 }}
            >
              info@smaalrosan.com
            </motion.a>
          </motion.div>

          {/* Social Media */}
          <motion.div className="text-right" variants={itemVariants}>
            <h3 className="mb-1 font-bold text-white lg:mb-0 lg:text-lg">
              تابعنا
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="flex items-center rounded-full transition-colors duration-300"
                  variants={socialIconVariants}
                  whileHover="hover"
                  target="_blank"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Customer Service & Social */}
          <motion.div className="text-right" variants={itemVariants}>
            {/* Customer Service */}

            <h3 className="text-[.95rem] font-bold text-white md:text-base lg:text-lg">
              خدمة العملاء
            </h3>
            <motion.a
              href="tel:8001111969"
              className="text-secondaryTextColor pr-1 text-[.95rem] transition-colors duration-300 hover:text-white sm:text-[1.1rem]"
              whileHover={{ scale: 1.05 }}
            >
              969 1111 800
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
