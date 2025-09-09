import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

const MobileMenu = ({ isOpen, onClose, onRegisterClick }) => {
  const navigationItems = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "المخططات", path: "/plans" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="bg-primaryColor fixed top-0 right-0 z-50 h-full w-full md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <div className="border-grayColor/20 flex items-center justify-between border-b px-6 pt-8 pb-2">
              <Logo width="9rem" height="4.5rem" />

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/10 shadow-xl backdrop-blur-md transition-all duration-300 hover:from-red-500/80 hover:to-red-400/80"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                {/* Glow effect */}
                <span className="absolute inset-0 -z-10 rounded-full bg-red-500/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"></span>
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex h-full flex-col">
              {/* Welcome Text */}
              <motion.div
                className="px-6 py-8 text-center"
                custom={0}
                variants={itemVariants}
                initial="closed"
                animate="open"
              >
                <p className="text-base leading-relaxed text-white">
                  نسعد بمساعدتك في اختيار المخطط الأنسب سجل بياناتك وسنتواصل معك
                  بالتفاصيل
                </p>
              </motion.div>

              {/* Register Button */}
              <motion.div
                className="mb-8 px-6"
                custom={1}
                variants={itemVariants}
                initial="closed"
                animate="open"
              >
                <Button
                  onClick={() => {
                    onRegisterClick();
                    onClose();
                  }}
                  className="hadow-md hover:bg-secondaryColor/90 focus:ring-secondaryColor/50 w-full py-4 text-lg font-bold text-white transition-all duration-300 hover:shadow-lg focus:ring-2 focus:outline-none"
                  bgColor="bg-secondaryColor"
                  animated={false}
                >
                  سجل اهتمامك الآن
                </Button>
              </motion.div>

              {/* Navigation Links */}
              <div className="flex-1 px-6">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    custom={index + 2}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <motion.div
                      whileHover={{ x: -8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="group border-grayColor/10 relative block border-b py-5 text-right text-xl font-medium text-white transition-colors"
                      >
                        {/* النص */}
                        <span className="group-hover:text-secondaryColor relative z-10 transition-colors">
                          {item.name}
                        </span>

                        {/* underline animation */}
                        <span className="bg-secondaryColor absolute right-0 bottom-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"></span>

                        {/* subtle background hover (mobile & desktop) */}
                        <span className="absolute inset-0 -z-10 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <motion.div
                className="border-grayColor/20 border-t px-6 py-8"
                custom={navigationItems.length + 2}
                variants={itemVariants}
                initial="closed"
                animate="open"
              >
                <p className="text-center text-sm text-white">
                  مرحباً بك في موقعنا
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
};

export default MobileMenu;
