import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavigationLinks = ({ isMobile = false, className = "" }) => {
  const navigationItems = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "المخططات", path: "/plans" },
  ];

  const baseClasses = "font-tajawal transition-colors duration-200";
  const desktopClasses =
    "text-secondaryTextColor font-bold text-[.9rem] xl:text-base ";
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
            className={` ${baseClasses} ${mobileClasses}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-14 xl:space-x-20 ${className}`}>
      {navigationItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={` ${baseClasses} ${desktopClasses}`}
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
