import React from "react";
import { Button, Input } from "..";

const Login = () => {
  const [showEye, setShowEye] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  return (
    <div className="flex flex-col items-center w-96 h-96 bg-gray-200 rounded-lg bg-white shadow-lg border border-gray-300 p-8">
      <div>
        <h1 className="text-xl font-bold text-center">User Login</h1>
        <p className="w-64 text-sm text-center text-gray-400 mt-2">
          Welcome to TechAdmire, enter your details to sign in
        </p>
      </div>
      <div className="mt-6 space-y-4 ">
        <Input
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          type="text"
          placeholder="Email"
        />
        <Input
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
          type="password"
          placeholder="Password"
          {...{ showEye, setShowEye }}
        />
      </div>
      <Button text="Login" />
    </div>
  );
};

export default Login;
