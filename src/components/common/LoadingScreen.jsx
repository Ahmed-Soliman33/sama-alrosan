import { motion } from "framer-motion";
import Logo from "./Logo";
import PropTypes from "prop-types";

const LoadingScreen = ({
  isVisible = true,
  progress = 0,
  message = "جاري التحميل...",
  showProgress = true,
}) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="from-primaryColor to-secondaryColor h-full w-full bg-gradient-to-br via-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo with Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="relative"
        >
          {/* Glow Effect */}
          <motion.div
            className="bg-secondaryColor/80 absolute -inset-4 rounded-full blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo */}
          <div className="relative z-10">
            <Logo className="h-20 w-auto" />
          </div>
        </motion.div>

        {/* Progress Bar (if enabled) */}
        {showProgress && (
          <div className="mt-20 w-48 md:w-64">
            <div className="text-grayColor mb-2 flex justify-between text-sm">
              <span>{message}</span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <motion.div
                className="from-secondaryColor to-secondaryColor/80 h-full bg-gradient-to-r"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        )}

        {/* Floating Dots Animation */}
        <div className="absolute bottom-10 flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="bg-secondaryColor/60 h-3 w-3 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          className="text-primaryColor text-lg font-medium"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {!showProgress && message}
        </motion.p>
      </div>

      {/* Bottom Brand Text */}
      <motion.div
        className="absolute bottom-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.8,
        }}
      >
        <p className="text-grayColor text-sm">مرحباً بك في موقعنا</p>
      </motion.div>
    </motion.div>
  );
};

LoadingScreen.propTypes = {
  isVisible: PropTypes.bool,
  progress: PropTypes.number,
  message: PropTypes.string,
  showProgress: PropTypes.bool,
};

export default LoadingScreen;
