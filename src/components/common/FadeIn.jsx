import { useRef, memo } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

//  Component To handle the fade in animation for any element
const FadeIn = ({ children, className, delay = 0, element = "div" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  // Custom element handling
  const MotionTag = motion[element] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
};

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  element: PropTypes.string,
  className: PropTypes.string,
};

export default memo(FadeIn);
