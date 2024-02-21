import { string, object } from "yup";

export const signUpSchema = object({
  name: string().required("Name is required"),
  lastName: string().required("Last name is required"),
  username: string()
    .required("Username required")
    .min(8)
    .matches(/^[a-zA-Z0-9_.-]*$/, "Invalid Username"),
  email: string().required("Email is required").email("Invalid email").max(255),
  dateOfBirth: string().required("DOB is required"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters"),
});
