import { useState } from "react";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@hooks/useMediaQuery";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <>
      <nav className="absolute top-0 right-0 left-0 z-50 bg-transparent">
        <div className="mx-auto px-3 pt-4 sm:px-6 lg:px-20">
          <div className="grid max-h-20 grid-cols-3 items-center justify-between md:flex">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-secondaryTextColor hover:text-secondaryColor focus:ring-secondaryColor inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700/55 focus:ring-2 focus:outline-none focus:ring-inset"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">فتح القائمة الرئيسية</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-7 w-7 cursor-pointer"
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
                    className="block h-7 w-7 cursor-pointer"
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
            <div className="flex flex-shrink-0 items-center justify-self-center">
              <div className="hidden xl:block">
                <Logo width="12rem" height="6rem" />
              </div>
              <div className="xl:hidden">
                <Logo width="9.5rem" height="5rem" />
              </div>
              <div className="hidden pt-5 md:mr-12 md:block">
                <NavigationLinks className="mr-4" />
              </div>
            </div>

            {/* Register Button - Left side */}
            <div className="mb-[-10px] ml-2 justify-self-end">
              <Button
                onClick={handleRegisterClick}
                className="px-1 py-1 text-[.9rem] font-bold text-black md:px-2 md:py-2 md:text-xl xl:px-4 xl:text-2xl"
                animated={!isMobile}
              >
                سجل اهتمامك
              </Button>
            </div>
          </div>

          <div className="h-[0.2px] bg-[#F5F2EA] opacity-20" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        onRegisterClick={handleRegisterClick}
      />
    </>
  );
};

export default Navbar;
