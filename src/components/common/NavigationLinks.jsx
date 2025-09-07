import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavigationLinks = ({ isMobile = false, className = "" }) => {
  const navigationItems = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "المخططات", path: "/plans" },
  ];

  const baseClasses = "font-tajawal transition-colors duration-200";
  const desktopClasses = "text-secondaryTextColor font-bold text-base";
  const mobileClasses =
    "text-secondaryTextColor hover:text-secondaryColor block px-3 py-2 text-base";
  const activeClasses = "text-secondaryColor";

  if (isMobile) {
    return (
      <div className={`space-y-1 ${className}`}>
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={` ${baseClasses} ${mobileClasses} ${item.isActive ? activeClasses : ""} `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center space-x-20 rtl:space-x-reverse ${className}`}
    >
      {navigationItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={` ${baseClasses} ${desktopClasses} ${item.isActive ? activeClasses : ""} `}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

NavigationLinks.propTypes = {
  isMobile: PropTypes.bool,
  className: PropTypes.string,
};

export default NavigationLinks;
