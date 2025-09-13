import PropTypes from "prop-types";

const Heading = ({ children, className, baseStyle = true, ...props }) => {
  const baseClasses =
    "text-[2.1rem] font-bold sm:pt-3 sm:text-4xl md:pt-5 xl:pt-8 xl:text-[2.6rem]";

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
