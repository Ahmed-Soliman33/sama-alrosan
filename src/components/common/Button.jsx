import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Button = ({
  children,
  size = "md",
  onClick = null,
  disabled = false,
  className = "",
  type = "button",
  animated = true,
  bgColor = "bg-white",
  initialHeight = 70, // النسبة المئوية للارتفاع الأولي
  ...props
}) => {
  // Base button styles
  const baseClasses = `font-tajawal cursor-pointer transition-colors duration-200 relative overflow-hidden  disabled:opacity-50 disabled:cursor-not-allowed`;

  // Size styles
  const sizes = {
    sm: "px-3 py-1.5",
    md: "px-4 py-2",
    lg: "px-6 py-3",
    xl: "px-8 py-4",
  };

  // Width styles

  const buttonClasses = `${baseClasses} ${sizes[size]} ${className}`
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

      {/* Content */}
      <span className={`relative z-10`}>{children}</span>
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  animated: PropTypes.bool,
  bgColor: PropTypes.string,
  initialHeight: PropTypes.number,
};

export default Button;
