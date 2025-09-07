import { useState } from "react";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-transparent">
      <div className="mx-auto px-3 pt-4 sm:px-6 lg:px-20">
        <div className="flex max-h-20 items-center justify-between">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-secondaryTextColor hover:text-secondaryColor focus:ring-secondaryColor inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-inset"
              aria-expanded="false"
            >
              <span className="sr-only">فتح القائمة الرئيسية</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo - Right side for Arabic layout */}
          <div className="flex flex-shrink-0 items-center">
            <Logo width="12rem" height="6rem" />
            <div className="hidden pt-5 md:mr-12 md:block">
              <NavigationLinks className="mr-4" />
            </div>
          </div>

          {/* Register Button - Left side */}
          <div className="mb-[-10px]">
            <Button
              size="md"
              onClick={handleRegisterClick}
              className="text-xl font-bold text-black"
            >
              سجل اهتمامك
            </Button>
          </div>
        </div>

        <div className="h-[0.2px] bg-[#F5F2EA] opacity-20" />
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="bg-primaryColor border-t border-gray-700 px-2 pt-4 pb-3 sm:px-3">
          <NavigationLinks isMobile={true} className="mb-4" />
          <div className="px-3">
            <Button
              size="md"
              onClick={handleRegisterClick}
              className="text-2xl font-bold text-black"
            >
              سجل اهتمامك
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
