import PropTypes from "prop-types";

const Logo = ({
  width = "280.5px",
  height = "161px",
  className = "",
  alt = "سما الرياض - شعار الشركة",
}) => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div
      className={`flex cursor-pointer items-center justify-center ${className}`}
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
  alt: PropTypes.string,
};

export default Logo;
