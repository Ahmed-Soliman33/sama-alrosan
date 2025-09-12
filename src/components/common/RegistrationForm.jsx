import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import currencyImage from "@assets/images/registration/SAR-currency.webp";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    planType: "",
    area: "",
    budget: "",
  });

  // Function to format numbers with commas and support for decimal points
  const formatNumber = (value) => {
    if (!value) return "";

    // Allow only numbers and decimal point
    let cleanValue = value.toString().replace(/[^0-9.]/g, "");

    // Prevent leading zeros (except for decimal numbers like 0.5)
    if (
      cleanValue.length > 1 &&
      cleanValue[0] === "0" &&
      cleanValue[1] !== "."
    ) {
      cleanValue = cleanValue.replace(/^0+/, "");
    }

    // Ensure only one decimal point exists
    const parts = cleanValue.split(".");
    if (parts.length > 2) {
      cleanValue = parts[0] + "." + parts.slice(1).join("");
    }

    // Separate integer and decimal parts
    const [integerPart, decimalPart] = cleanValue.split(".");

    // Format the integer part with commas
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Limit the decimal part to a maximum of two digits
    if (decimalPart !== undefined) {
      const limitedDecimal = decimalPart.slice(0, 2);
      return formattedInteger + "." + limitedDecimal;
    }

    return formattedInteger;
  };

  // Function to handle changes in numeric input fields
  const handleNumberInputChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and decimal point
    let cleanValue = value.replace(/[^0-9.]/g, "");

    // Prevent leading zeros (except for decimal numbers like 0.5)
    if (
      cleanValue.length > 1 &&
      cleanValue[0] === "0" &&
      cleanValue[1] !== "."
    ) {
      cleanValue = cleanValue.replace(/^0+/, "");
    }

    // Ensure only one decimal point exists
    const parts = cleanValue.split(".");
    if (parts.length > 2) {
      cleanValue = parts[0] + "." + parts.slice(1).join("");
    }

    // Limit the decimal part to a maximum of two digits
    if (parts.length === 2) {
      cleanValue = parts[0] + "." + parts[1].slice(0, 2);
    }

    // Remove commas for saving
    const numericValue = cleanValue.replace(/,/g, "");

    setFormData((prev) => ({
      ...prev,
      [name]: numericValue,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    focus: { scale: 1.01 },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const labelClasses =
    "text-secondaryTextColor w-[45%] xl:w-[30%] lg:w-[35%] md:w-[40%] sm:w-[45%] text-right pt-2 mb-2 sm:mb-3 xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg text-[0.9rem] font-bold";

  const inputClasses =
    "text-secondaryTextColor font-bold mb-3  xl:w-[70%] lg:w-[65%] md:w-[80%] w-[100%] border-2 border-[#fff]/27 focus:border-secondaryColor/60 focus:outline-none bg-transparent xl:p-2.5 lg:p-2  sm:p-1 p-0.5  text-right transition-colors duration-300";

  return (
    <motion.div
      className="bg-primaryTextColor relative mx-auto mt-16 mb-20 px-4 pt-6 pb-16 sm:max-w-6xl sm:px-8 sm:pt-12 md:mb-44 md:pb-20 lg:max-w-5xl lg:px-13"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Header - positioned top right */}
      <motion.div
        className="bg-primaryTextColor absolute -top-[5%] right-0 px-3 pt-4 sm:-top-[6%] sm:px-4 lg:-top-[7%] lg:px-7 lg:pt-6 lg:pb-2"
        variants={inputVariants}
      >
        <h2 className="text-secondaryTextColor text-[1.05rem] font-bold sm:text-xl md:text-2xl lg:text-3xl">
          سجل اهتمامك
        </h2>
      </motion.div>
      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-4 sm:space-y-8 lg:mt-14 lg:space-y-11"
      >
        {/* Full Name */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:gap-4"
          variants={inputVariants}
        >
          <label className={labelClasses}>الاسم الكامل</label>
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={inputClasses}
            whileFocus="focus"
            variants={inputVariants}
            required
          />
        </motion.div>

        {/* Phone Number */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:gap-4"
          variants={inputVariants}
        >
          <label className={labelClasses}>رقــــــم الجـــــوال</label>
          <motion.input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={inputClasses}
            whileFocus="focus"
            variants={inputVariants}
            required
          />
        </motion.div>

        {/* City */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:gap-4"
          variants={inputVariants}
        >
          <label className={labelClasses}>المدينة المفضلة</label>
          <motion.input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={inputClasses}
            whileFocus="focus"
            variants={inputVariants}
            required
          />
        </motion.div>

        {/* Plan Type */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:gap-4"
          variants={inputVariants}
        >
          <label className={labelClasses}>نـــــــــــــوع المخــطط</label>
          <div className="flex w-full justify-start gap-16 sm:gap-22 md:w-4/5 lg:w-3/5 lg:gap-26">
            {["سكني", "تجاري"].map((type) => (
              <motion.label
                key={type}
                className="flex cursor-pointer items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <input
                  type="radio"
                  name="planType"
                  value={type}
                  checked={formData.planType === type}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <motion.div
                  className={`ml-2 h-5 w-5 border-2 transition-colors duration-300 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 ${
                    formData.planType === type
                      ? "border-secondaryColor bg-secondaryColor"
                      : "border-[#707070]"
                  }`}
                  animate={{
                    backgroundColor:
                      formData.planType === type ? "#d3a851" : "transparent",
                  }}
                />
                <span className="text-secondaryTextColor pt-2 pr-2 text-[1.1rem] sm:text-[1.3rem] md:text-[1.4rem] lg:pt-3 lg:pr-4 lg:text-[1.7rem]">
                  {type}
                </span>
              </motion.label>
            ))}
          </div>
        </motion.div>

        {/* Area */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:gap-4"
          variants={inputVariants}
        >
          <label className={labelClasses}>المساحة المتوقعة</label>
          <motion.input
            type="text"
            name="area"
            value={formatNumber(formData.area)}
            onChange={handleNumberInputChange}
            className={`${inputClasses} [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
            whileFocus="focus"
            variants={inputVariants}
            required
          />
        </motion.div>

        {/* Expected Price */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:gap-4"
          variants={inputVariants}
        >
          <label className={labelClasses}>الميزانية التقريبية</label>
          <div
            className={`flex w-full items-center justify-between gap-2 md:w-[80%] lg:w-[70%] lg:gap-2 xl:w-[70%]`}
          >
            <div className="relative w-full flex-1">
              <motion.input
                type="text"
                name="budget"
                value={formatNumber(formData.budget)}
                onChange={handleNumberInputChange}
                className={`text-secondaryTextColor focus:border-secondaryColor/60 mb-3 w-full [appearance:textfield] border-2 border-[#fff]/27 bg-transparent p-0.5 text-right font-bold transition-colors duration-300 focus:outline-none sm:p-1 lg:p-2 xl:p-2.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                whileFocus="focus"
                variants={inputVariants}
                required
              />
            </div>
            <div className="mb-2 flex-shrink-0 sm:mb-1">
              <img
                src={currencyImage}
                alt="SAR"
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
              />
            </div>
          </div>
        </motion.div>

        {/* Submit Button - positioned to extend outside form */}
        <motion.div
          variants={inputVariants}
          className="absolute -bottom-[clamp(5%,5.5vw,6%)] left-[32%] mx-auto w-[clamp(60%,67vw,75%)] -translate-x-1/2 sm:left-[clamp(23%,26.5vw,26%)]"
        >
          <Button
            type="submit"
            className="text-primaryTextColor bg-secondaryColor w-[50%] pt-[0.55rem] pb-2 text-[1.4rem] font-bold sm:w-[35%] sm:pt-3 sm:text-3xl lg:pt-5 lg:pb-3 lg:text-4xl"
            bgColor="bg-secondaryColor"
            animated={true}
            initialHeight={70}
          >
            إرسال
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
