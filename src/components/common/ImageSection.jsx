import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSection = ({
  image,
  sectionClasses = "",
  alt,
  showSkeleton = true,
  ...props
}) => {
  const [isMediaLoaded, setIsMediaLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleMediaLoad = () => {
    setIsMediaLoaded(true);
    setIsLoading(false);
  };

  const handleMediaError = () => {
    setIsLoading(false);
  };

  return (
    <section className={sectionClasses} {...props}>
      {/* Skeleton Loader */}
      <AnimatePresence>
        {isLoading && showSkeleton && (
          <motion.div
            className="absolute inset-0 animate-pulse bg-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Section Skeleton */}
            <div className="h-full min-h-[60vh] w-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]" />

            {/* Image Skeleton Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 animate-pulse items-center justify-center bg-gray-400">
                <svg
                  className="h-12 w-12 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Media Layer */}
      <AnimatePresence>
        {image ? (
          <motion.img
            src={image}
            className="h-full min-h-[20vh] w-full object-cover object-center"
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
            onAnimationComplete={() => setIsLoading(false)}
          >
            <div className="text-center">
              <svg
                className="mx-auto mb-4 h-16 w-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-500">No media provided</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageSection;
