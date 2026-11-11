export const fieldOrder = ["name", "email", "phone", "service", "date", "message"];

// Today's date as YYYY-MM-DD (used to block past dates)
export function getToday() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().split("T")[0];
}

export function validateField(name, value) {
  const v = value.trim();

  switch (name) {
    case "name":
      if (!v) return "Please enter your name.";
      if (v.length < 2) return "Your name looks too short.";
      return "";

    case "email":
      if (!v) return "Please enter your email address.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
        return "Please enter a valid email address.";
      return "";

    case "phone":
      if (!v) return ""; // optional
      if (!/^[+\d][\d\s()-]{6,19}$/.test(v))
        return "Please enter a valid phone number.";
      return "";

    case "service":
      if (!v) return "Please choose a service.";
      return "";

    case "date":
      if (!v) return ""; // optional
      if (v < getToday()) return "Please choose today or a future date.";
      return "";

    case "message":
      if (!v) return "Please tell us a little about your project.";
      if (v.length < 10) return "Please write at least a short sentence.";
      return "";

    default:
      return "";
  }
}

// Checks every field and returns only the ones with errors
export function validateAll(values) {
  const errors = {};
  fieldOrder.forEach((field) => {
    const message = validateField(field, values[field] || "");
    if (message) errors[field] = message;
  });
  return errors;
}