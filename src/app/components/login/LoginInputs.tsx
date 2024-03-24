import React from "react";
import { Input } from "..";

const LoginInputs = ({ formData, setFormData, showEye, setShowEye }) => {
  return (
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
  );
};

export default LoginInputs;
