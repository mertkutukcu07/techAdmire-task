import React from "react";
import { loginController } from "@/app/hooks/formController";
import LoginInputs from "./LoginInputs";
import LoginButton from "./LoginButton";
import AuthHeader from "../AuthHeader";
import AuthFooter from "../AuthFooter";
import { navigation } from "@/app/hooks/navigation";
import { RouteNames } from "@/app/enums/routeNames";
import { useRouter } from "next/navigation";

interface LoginProps {
  handleRegister: () => void;
}

const Login = ({ handleRegister }: LoginProps) => {
  const [showEye, setShowEye] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { navigate } = navigation(router);

  const [loading, setLoading] = React.useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      const result = loginController(formData);
      if (result.error) {
        return;
      }
      navigate(RouteNames.Home);
      setFormData({ email: "", password: "" });
    }, 1500);
  };
  return (
    <div className="flex flex-col items-center w-96 h-96 bg-gray-200 rounded-lg bg-white shadow-lg border border-gray-300 p-8">
      <AuthHeader
        text={"User Login"}
        description={"Welcome to TechAdmire, enter your details to sign in"}
      />
      <LoginInputs
        {...{
          formData,
          setFormData,
          showEye,
          setShowEye,
        }}
      />
      <LoginButton {...{ loading, handleLogin }} />
      <AuthFooter
        text={"Don't have an account?"}
        authType={"Register"}
        footerPress={handleRegister}
      />
    </div>
  );
};

export default Login;
