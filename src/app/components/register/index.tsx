import React from "react";
import AuthHeader from "../AuthHeader";
import AuthFooter from "../AuthFooter";
import RegisterInputs from "./RegisterInputs";
import { registerController } from "@/app/hooks/formController";
import RegisterButton from "./RegisterButton";

interface RegisterProps {
  handleLogin: () => void;
}

const Register = ({ handleLogin }: RegisterProps) => {
  const [formData, setFormData] = React.useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showEyePass, setShowEyePass] = React.useState(false);
  const [showEyeConfirm, setShowEyeConfirm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleRegister = async () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      const result = await registerController(formData);
      if (result.error) {
        return;
      } else {
        handleLogin();
      }

      setFormData({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }, 1500);
  };
  return (
    <div className="flex flex-col items-center w-96  bg-gray-200 rounded-lg bg-white shadow-lg border border-gray-300 p-8 mb-10">
      <AuthHeader
        text={"User Register"}
        description={
          "Welcome to TechAdmire Hand Waving, enter your details to register"
        }
      />
      <RegisterInputs
        {...{
          formData,
          setFormData,
          showEyePass,
          setShowEyePass,
          showEyeConfirm,
          setShowEyeConfirm,
        }}
      />
      <RegisterButton {...{ loading, handleRegister }} />
      <AuthFooter
        text={"Already have an account?"}
        authType={"Login"}
        footerPress={handleLogin}
      />
    </div>
  );
};

export default Register;
