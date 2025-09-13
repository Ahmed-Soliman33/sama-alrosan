import Heading from "@components/common/Heading";
import { motion } from "framer-motion";
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "التسويق العقاری",
      subtitle: ["التسويق", "العقاری"],
    },
    {
      id: 2,
      title: "التطوير العقاری",
      subtitle: ["التطوير", "العقاری"],
    },
    {
      id: 3,
      title: "إدارة الأملاك",
      subtitle: ["إدارة", "الأملاك"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white px-5 py-16 sm:px-14 md:px-20">
      <div className="mx-auto lg:max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="mb-8 text-center md:mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Heading className="text-primaryTextColor">خدماتنا</Heading>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 items-center justify-center gap-[clamp(1.5rem,3vw,4rem)] sm:grid-cols-2 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`bg-secondaryColor relative h-[clamp(6.5rem,10vw,8rem)] overflow-hidden rounded-lg ${
                index === 2
                  ? "sm:col-span-2 sm:mx-auto sm:w-[50%] md:col-span-1 md:mx-0 md:w-auto md:max-w-none"
                  : ""
              }`}
            >
              {/* Content */}
              <div className="relative z-10 flex h-full items-center justify-center gap-2 sm:flex-col sm:gap-0">
                {service.subtitle.map((line, lineIndex) => (
                  <motion.div
                    key={lineIndex}
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + lineIndex * 0.1 }}
                  >
                    <h3
                      className={`${
                        lineIndex === 0 ? "text-white" : "text-primaryTextColor"
                      } text-[1.9rem] font-bold sm:text-[1.6rem] md:pt-1.5 lg:pt-2 xl:text-[2.1rem]`}
                    >
                      {line}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
