import Navbar from "@components/common/Navbar";
import { Outlet } from "react-router";
import Footer from "@components/common/Footer";
import ScrollToTop from "@components/common/ScrollToTop";
import { motion } from "framer-motion";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <ScrollToTop />

      {/* Navbar with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Navbar />
      </motion.div>

      {/* Main content with smooth transitions */}
      <motion.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Outlet />
      </motion.main>

      {/* Footer with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default MainLayout;
