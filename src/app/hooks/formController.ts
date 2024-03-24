import { Alert } from "../components";
import { AlertType } from "../enums/Alert";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const loginController = (formData) => {
  if (!formData.email || !formData.password) {
    return {
      error: Alert("Please fill all fields", AlertType.Error),
    };
  }

  if (!emailRegex.test(formData.email)) {
    return {
      error: Alert("Invalid email address", AlertType.Error),
    };
  }

  if (formData.password.length < 6) {
    return {
      error: Alert("Password must be at least 6 characters", AlertType.Error),
    };
  }

  return {
    success: Alert("Login successful", AlertType.Success),
  };
};

export const registerController = (formData) => {
  if (
    !formData.name ||
    !formData.surname ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    return {
      error: Alert("Please fill all fields", AlertType.Error),
    };
  }

  if (!emailRegex.test(formData.email)) {
    return {
      error: Alert("Invalid email address", AlertType.Error),
    };
  }

  if (formData.password.length < 6) {
    return {
      error: Alert("Password must be at least 6 characters", AlertType.Error),
    };
  }

  if (formData.password !== formData.confirmPassword) {
    return {
      error: Alert("Passwords do not match", AlertType.Error),
    };
  }

  return {
    success: Alert("Registration successful", AlertType.Success),
  };
};
