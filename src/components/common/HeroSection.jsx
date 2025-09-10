import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

const HeroSection = ({
  // Media props
  image = null,
  video = null,
  alt = "hero image",

  // Layout props
  height = "max-h-[1080px]",
  className = "",

  // Overlay props
  overlay = false,
  overlayGradient = "bg-gradient-to-b from-black/90 via-black/40 to-transparent",
  overlayClassName = "",

  // Content props
  children = null,
  contentPosition = "center", // center, top, bottom, left, right
  contentClassName = "",

  // Video specific props
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,

  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMediaLoaded, setIsMediaLoaded] = useState(false);

  // Handle media load success
  const handleMediaLoad = useCallback(() => {
    setIsMediaLoaded(true);
    setIsLoading(false);
  }, []);

  // Handle media load error
  const handleMediaError = useCallback(() => {
    setIsMediaLoaded(true);
    setIsLoading(false);
  }, []);

  // Start loading when media source changes
  useEffect(() => {
    if (image || video) {
      setIsLoading(true);
      setIsMediaLoaded(false);
    } else {
      setIsLoading(false);
      setIsMediaLoaded(true);
    }
  }, [image, video]);

  // Content positioning classes
  const contentPositions = {
    center: "absolute inset-0 flex items-center justify-center",
    top: "absolute top-0 left-0 right-0 flex items-start justify-center pt-20",
    bottom:
      "absolute bottom-0 left-0 right-0 flex items-end justify-center pb-20",
    left: "absolute inset-y-0 left-0 flex items-center justify-start pl-20",
    right: "absolute inset-y-0 right-0 flex items-center justify-end pr-20",
    "top-left":
      "absolute top-0 left-0 flex items-start justify-start pt-20 pl-20",
    "top-right":
      "absolute top-0 right-0 flex items-start justify-end pt-20 pr-20",
    "bottom-left":
      "absolute bottom-0 left-0 flex items-end justify-start pb-20 pl-20",
    "bottom-right":
      "absolute bottom-0 right-0 flex items-end justify-end pb-20 pr-20",
  };

  const sectionClasses =
    `relative ${height} ${className} overflow-hidden`.trim();
  const overlayClasses =
    `absolute top-0 left-0 h-full w-full ${overlayGradient} ${overlayClassName}`.trim();
  const contentClasses =
    `${contentPositions[contentPosition]} ${contentClassName}`.trim();

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen isVisible={true} message="جاري تحميل المحتوى..." />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className={sectionClasses} {...props}>
        {/* Media Layer */}
        <AnimatePresence>
          {video ? (
            <motion.video
              src={video}
              className="h-full min-h-[60vh] w-full object-cover object-center"
              autoPlay={autoPlay}
              muted={muted}
              loop={loop}
              controls={controls}
              playsInline
              onCanPlayThrough={handleMediaLoad}
              onError={handleMediaError}
              initial={{ opacity: 0 }}
              animate={{ opacity: isMediaLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
          ) : image ? (
            <motion.img
              src={image}
              className="h-full min-h-[60vh] w-full object-cover object-center"
              alt={alt}
              onLoad={handleMediaLoad}
              onError={handleMediaError}
              initial={{ opacity: 0 }}
              animate={{ opacity: isMediaLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <motion.div
              className="flex h-full w-full items-center justify-center bg-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-gray-500">No media provided</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay Layer */}
        {overlay && <div className={overlayClasses} />}

        {/* Content Layer */}
        {children && (
          <motion.div
            className={contentClasses}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMediaLoaded ? 1 : 0,
              y: isMediaLoaded ? 0 : 20,
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </section>
    </>
  );
};

HeroSection.propTypes = {
  // Media props
  image: PropTypes.string,
  video: PropTypes.string,
  alt: PropTypes.string,

  // Layout props
  height: PropTypes.string,
  className: PropTypes.string,

  // Overlay props
  overlay: PropTypes.bool,
  overlayGradient: PropTypes.string,
  overlayClassName: PropTypes.string,

  // Content props
  children: PropTypes.node,
  contentPosition: PropTypes.oneOf([
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ]),
  contentClassName: PropTypes.string,

  // Video specific props
  autoPlay: PropTypes.bool,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
  controls: PropTypes.bool,
};

export default HeroSection;
