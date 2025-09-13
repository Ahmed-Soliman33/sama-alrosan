import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import currencyImage from "@assets/images/registration/SAR-currency.webp";

const RegistrationForm = ({ visibleFields }) => {
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
    "text-secondaryTextColor w-[45%] xl:w-[24%] lg:w-[28%] md:w-[32%] sm:w-[45%] text-right pt-1.5 mb-1.5 sm:mb-2.5 xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-[0.9rem] font-bold";

  const inputClasses =
    "text-secondaryTextColor font-bold mb-2.5 xl:w-[74%] lg:w-[72%] md:w-[68%] w-[100%] border-2 border-[#fff]/27 focus:border-secondaryColor/60 focus:outline-none bg-transparent lg:p-1.5  sm:p-1 p-0.5 text-right transition-colors duration-300";

  return (
    <motion.div
      className="bg-primaryTextColor relative mx-auto my-12 px-4 pt-5 pb-12 sm:px-6 sm:pt-10 md:max-w-[87%] md:pb-16 lg:max-w-4xl lg:px-10"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Header - positioned top right */}
      <motion.div
        className="bg-primaryTextColor absolute -top-[5%] right-0 px-3 pt-3 sm:-top-[6%] sm:px-3 lg:-top-[7%] lg:px-5 lg:pt-4 lg:pb-1.5"
        variants={inputVariants}
      >
        <h2 className="text-secondaryTextColor text-[1.05rem] font-bold sm:text-xl md:text-xl lg:text-2xl">
          سجل اهتمامك
        </h2>
      </motion.div>
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-3 sm:space-y-6 lg:mt-11 lg:space-y-8"
      >
        {/* Full Name */}
        {visibleFields.includes("name") && (
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center xl:gap-12"
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
        )}

        {/* Phone Number */}
        {visibleFields.includes("phone") && (
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center xl:gap-12"
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
        )}

        {/* City */}
        {visibleFields.includes("city") && (
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center xl:gap-12"
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
        )}

        {/* Plan Type */}
        {visibleFields.includes("planType") && (
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center xl:gap-12"
            variants={inputVariants}
          >
            <label className={labelClasses}>
              {visibleFields.includes("city")
                ? "نـــــــــــــوع المخــطط"
                : "مجال الإهتمام"}
            </label>
            <div className="flex w-full justify-start gap-12 sm:gap-18 md:w-[68%] lg:w-[72%] lg:gap-20 xl:w-[74%]">
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
                    className={`ml-2 h-5 w-5 border-2 transition-colors duration-300 sm:h-6 sm:w-6 md:h-6 md:w-6 ${visibleFields.includes("city") && "lg:h-7 lg:w-7"} ${
                      formData.planType === type
                        ? "border-secondaryColor bg-secondaryColor"
                        : "border-[#707070]"
                    }`}
                    animate={{
                      backgroundColor:
                        formData.planType === type ? "#d3a851" : "transparent",
                    }}
                  />
                  <span className="text-secondaryTextColor pt-1.5 pr-2 text-[1.1rem] sm:text-[1.3rem] md:text-[1.2rem] lg:pt-2 lg:pr-3 lg:text-[1.4rem]">
                    {type}
                  </span>
                </motion.label>
              ))}
            </div>
          </motion.div>
        )}

        {/* Area */}
        {visibleFields.includes("area") && (
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center xl:gap-12"
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
        )}

        {/* Expected Budget */}
        {visibleFields.includes("budget") && (
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center xl:gap-12"
            variants={inputVariants}
          >
            <label className={labelClasses}>الميزانية التقريبية</label>
            <div
              className={`flex w-full items-center justify-between gap-2 md:w-[68%] lg:w-[72%] lg:gap-2 xl:w-[74%]`}
            >
              <div className="relative w-full flex-1">
                <motion.input
                  type="text"
                  name="budget"
                  value={formatNumber(formData.budget)}
                  onChange={handleNumberInputChange}
                  className={`text-secondaryTextColor focus:border-secondaryColor/60 mb-2.5 w-full [appearance:textfield] border-2 border-[#fff]/27 bg-transparent p-0.5 text-right font-bold transition-colors duration-300 focus:outline-none sm:p-1 lg:p-1.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                  whileFocus="focus"
                  variants={inputVariants}
                  required
                />
              </div>
              <div className="mb-1.5 flex-shrink-0 sm:mb-1">
                <img
                  src={currencyImage}
                  alt="SAR"
                  className="h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Submit Button - positioned to extend outside form */}
        <motion.div
          variants={inputVariants}
          className={`absolute left-[30%] mx-auto w-[clamp(60%,67vw,75%)] -translate-x-1/2 sm:left-[clamp(23%,26.5vw,26%)] ${visibleFields.includes("city") ? "-bottom-[clamp(5%,5.5vw,6%)]" : "-bottom-[clamp(5%,5.5vw,10%)]"}`}
        >
          <Button
            type="submit"
            className="text-primaryTextColor bg-secondaryColor w-[45%] pt-2 pb-2 text-2xl font-bold sm:w-[35%] sm:text-2xl lg:pt-4 lg:pb-2.5 lg:text-3xl"
            bgColor="bg-secondaryColor"
            animated={true}
            initialHeight={66}
          >
            إرسال
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
