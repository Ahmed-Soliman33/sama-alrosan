import PropTypes from "prop-types";

const Logo = ({
  width = "280.5px",
  height = "161px",
  className = "",
  onClick = null,
  alt = "سما الرياض - شعار الشركة",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`flex items-center justify-center ${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={handleClick}
      style={{ width, height }}
    >
      <img
        src="/logo.webp"
        alt={alt}
        className="h-full w-full object-contain opacity-100"
        loading="lazy"
      />
    </div>
  );
};

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  alt: PropTypes.string,
};

export default Logo;
