import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@components/ui/skeleton";

const ImageSection = ({ image, sectionClasses = "", alt, ...props }) => {
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
      {isLoading && <ImageSectionSkeleton />}

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
          <ImageSectionSkeleton />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageSection;

export const ImageSectionSkeleton = () => {
  return (
    <motion.div
      className="relative min-h-[20vh] sm:h-[50vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Skeleton className="absolute inset-0 h-full w-full" />
    </motion.div>
  );
};
