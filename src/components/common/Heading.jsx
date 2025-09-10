import PropTypes from "prop-types";

const Heading = ({ children, className, baseStyle = true, ...props }) => {
  const baseClasses =
    "text-[2.1rem] font-bold sm:pt-3 sm:text-4xl md:pt-5 md:text-4xl lg:text-4xl xl:pt-8 xl:text-5xl";

  const combinedStyles = baseStyle ? `${baseClasses} ${className}` : className;

  return (
    <h1 className={combinedStyles} {...props}>
      {children}
    </h1>
  );
};

export default Heading;

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  baseStyle: PropTypes.bool,
};
