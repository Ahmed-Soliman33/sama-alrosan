import { useState, useCallback } from "react";
import {
  validateField,
  validateForm,
  formatters,
} from "@utils/formValidations";

export const useForm = (initialValues = {}, enabledFields = []) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form field value
  const updateField = useCallback(
    (fieldName, value) => {
      setFormData((prev) => ({ ...prev, [fieldName]: value }));

      // Clear error when user starts typing
      if (errors[fieldName]) {
        setErrors((prev) => ({ ...prev, [fieldName]: "" }));
      }
    },
    [errors],
  );

  // Handle field blur (validation)
  const handleFieldBlur = useCallback(
    (fieldName) => {
      setTouched((prev) => ({ ...prev, [fieldName]: true }));
      const error = validateField(fieldName, formData[fieldName]);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    },
    [formData],
  );

  // Handle input change with formatting
  const handleInputChange = useCallback(
    (e, formatter = null) => {
      const { name, value, type } = e.target;

      let processedValue = value;

      // Apply formatter if provided
      if (formatter && formatters[formatter]) {
        processedValue = formatters[formatter](value);
      }

      // Special handling for different input types
      if (type === "tel" && name === "phone") {
        const cleanValue = value.replace(/\D/g, "");
        if (cleanValue.length <= 10) {
          updateField(name, cleanValue);
        }
        return;
      }

      if ((name === "area" || name === "budget") && formatter === "number") {
        const cleanValue = value.replace(/[^0-9.]/g, "");
        const numericValue = cleanValue.replace(/,/g, "");
        updateField(name, numericValue);
        return;
      }

      updateField(name, processedValue);
    },
    [updateField],
  );

  // Handle form submission
  const handleSubmit = useCallback(
    (onSubmit) => {
      return async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate all enabled fields
        const newErrors = validateForm(formData, enabledFields);

        // Mark all fields as touched
        const newTouched = {};
        enabledFields.forEach((field) => {
          newTouched[field] = true;
        });
        setTouched((prev) => ({ ...prev, ...newTouched }));

        if (Object.keys(newErrors).length > 0) {
          setErrors((prev) => ({ ...prev, ...newErrors }));
          setIsSubmitting(false);
          return;
        }

        try {
          await onSubmit(formData);
        } catch (error) {
          console.error("Form submission error:", error);
        } finally {
          setIsSubmitting(false);
        }
      };
    },
    [formData, enabledFields],
  );

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  // Get field props for easy integration
  const getFieldProps = useCallback(
    (fieldName, formatter = null) => {
      return {
        name: fieldName,
        value:
          formatter && formatters[formatter]
            ? formatters[formatter](formData[fieldName])
            : formData[fieldName] || "",
        onChange: (e) => handleInputChange(e, formatter),
        onBlur: () => handleFieldBlur(fieldName),
        error: errors[fieldName] && touched[fieldName] ? errors[fieldName] : "",
        hasError: !!(errors[fieldName] && touched[fieldName]),
      };
    },
    [formData, errors, touched, handleInputChange, handleFieldBlur],
  );

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    updateField,
    handleFieldBlur,
    handleInputChange,
    handleSubmit,
    resetForm,
    getFieldProps,
    isValid: Object.keys(errors).length === 0,
  };
};
