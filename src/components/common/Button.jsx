import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Button = ({
  children,
  onClick = null,
  disabled = false,
  className = "",
  type = "button",
  animated = true,
  bgColor = "bg-white",
  initialHeight = 70,
  ...props
}) => {
  // Base button styles
  const baseClasses = `font-tajawal cursor-pointer transition-colors duration-200 relative overflow-hidden  disabled:opacity-50 disabled:cursor-not-allowed`;

  // Width styles

  const buttonClasses = `${baseClasses} ${className}`
    .trim()
    .replace(/\s+/g, " ");

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={animated ? "hover" : {}}
      initial="initial"
      style={{ backgroundColor: "transparent" }}
      {...props}
    >
      {/* Background layer */}
      {animated ? (
        <motion.div
          className={`absolute inset-x-0 top-0 ${bgColor}`}
          variants={{
            initial: {
              height: animated ? `${initialHeight}%` : "100%",
            },
            hover: {
              height: "100%",
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
      ) : (
        <motion.div
          className={`absolute inset-0 top-0 ${bgColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ height: "100%" }}
        />
      )}

      {/* Content */}
      <span className={`relative z-10`}>{children}</span>
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  animated: PropTypes.bool,
  bgColor: PropTypes.string,
  initialHeight: PropTypes.number,
};

export default Button;
