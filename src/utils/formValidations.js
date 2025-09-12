// Form validation utilities
export const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[\u0600-\u06FF\s]+$/,
    messages: {
      required: "الاسم الكامل مطلوب",
      minLength: "الاسم يجب أن يكون حرفين على الأقل",
      maxLength: "الاسم لا يجب أن يزيد عن 50 حرف",
      pattern: "الاسم يجب أن يحتوي على أحرف عربية فقط",
    },
  },
  phone: {
    required: true,
    pattern: /^05[0-9]{8}$/,
    messages: {
      required: "رقم الجوال مطلوب",
      pattern: "رقم الجوال يجب أن يبدأ بـ 05 ويكون 10 أرقام",
      length: "رقم الجوال يجب أن يكون 10 أرقام",
    },
  },
  city: {
    required: true,
    minLength: 2,
    maxLength: 30,
    pattern: /^[\u0600-\u06FF\s]+$/,
    messages: {
      required: "المدينة مطلوبة",
      minLength: "اسم المدينة يجب أن يكون حرفين على الأقل",
      maxLength: "اسم المدينة لا يجب أن يزيد عن 30 حرف",
      pattern: "اسم المدينة يجب أن يحتوي على أحرف عربية فقط",
    },
  },
  planType: {
    required: true,
    options: ["سكني", "تجاري"],
    messages: {
      required: "نوع المخطط مطلوب",
      invalid: "يرجى اختيار نوع مخطط صحيح",
    },
  },
  area: {
    required: true,
    min: 0.1,
    max: 100000,
    type: "number",
    messages: {
      required: "المساحة مطلوبة",
      min: "المساحة يجب أن تكون أكبر من صفر",
      max: "المساحة لا يجب أن تزيد عن 100,000 متر مربع",
      invalid: "المساحة يجب أن تكون رقم صحيح",
    },
  },
  budget: {
    required: true,
    min: 10000,
    max: 100000000,
    type: "number",
    messages: {
      required: "الميزانية مطلوبة",
      min: "الميزانية يجب أن تكون 10,000 ريال على الأقل",
      max: "الميزانية لا يجب أن تزيد عن 100,000,000 ريال",
      invalid: "الميزانية يجب أن تكون رقم صحيح",
    },
  },
};

// Generic validation function
export const validateField = (fieldName, value, rules = validationRules) => {
  const rule = rules[fieldName];
  if (!rule) return "";

  const cleanValue = typeof value === "string" ? value.trim() : value;

  // Required validation
  if (rule.required && (!cleanValue || cleanValue === "")) {
    return rule.messages.required;
  }

  // Skip other validations if field is empty and not required
  if (!cleanValue && !rule.required) return "";

  // String validations
  if (typeof cleanValue === "string") {
    // Min length validation
    if (rule.minLength && cleanValue.length < rule.minLength) {
      return rule.messages.minLength;
    }

    // Max length validation
    if (rule.maxLength && cleanValue.length > rule.maxLength) {
      return rule.messages.maxLength;
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(cleanValue)) {
      return rule.messages.pattern;
    }
  }

  // Number validations
  if (rule.type === "number") {
    const numericValue =
      typeof cleanValue === "string"
        ? parseFloat(cleanValue.replace(/,/g, ""))
        : cleanValue;

    if (isNaN(numericValue)) {
      return rule.messages.invalid;
    }

    if (rule.min !== undefined && numericValue < rule.min) {
      return rule.messages.min;
    }

    if (rule.max !== undefined && numericValue > rule.max) {
      return rule.messages.max;
    }
  }

  // Options validation (for select/radio)
  if (rule.options && !rule.options.includes(cleanValue)) {
    return rule.messages.invalid;
  }

  // Phone specific validation
  if (fieldName === "phone") {
    const cleanPhone = cleanValue.replace(/\D/g, "");

    if (cleanPhone.length !== 10) {
      return rule.messages.length;
    }

    if (!rule.pattern.test(cleanPhone)) {
      return rule.messages.pattern;
    }
  }

  return "";
};

// Validate multiple fields
export const validateForm = (
  formData,
  fieldsToValidate,
  rules = validationRules,
) => {
  const errors = {};

  fieldsToValidate.forEach((fieldName) => {
    const error = validateField(fieldName, formData[fieldName], rules);
    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
};

// Format utilities
export const formatters = {
  phone: (value) => {
    if (!value) return "";
    const cleanValue = value.replace(/\D/g, "");

    if (cleanValue.length <= 3) {
      return cleanValue;
    } else if (cleanValue.length <= 6) {
      return `${cleanValue.slice(0, 3)} ${cleanValue.slice(3)}`;
    } else if (cleanValue.length <= 10) {
      return `${cleanValue.slice(0, 3)} ${cleanValue.slice(3, 6)} ${cleanValue.slice(6)}`;
    } else {
      return `${cleanValue.slice(0, 3)} ${cleanValue.slice(3, 6)} ${cleanValue.slice(6, 10)}`;
    }
  },

  number: (value) => {
    if (!value) return "";

    let cleanValue = value.toString().replace(/[^0-9.]/g, "");

    // Prevent leading zeros
    if (
      cleanValue.length > 1 &&
      cleanValue[0] === "0" &&
      cleanValue[1] !== "."
    ) {
      cleanValue = cleanValue.replace(/^0+/, "");
    }

    // Ensure only one decimal point
    const parts = cleanValue.split(".");
    if (parts.length > 2) {
      cleanValue = parts[0] + "." + parts.slice(1).join("");
    }

    const [integerPart, decimalPart] = cleanValue.split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (decimalPart !== undefined) {
      const limitedDecimal = decimalPart.slice(0, 2);
      return formattedInteger + "." + limitedDecimal;
    }

    return formattedInteger;
  },
};
