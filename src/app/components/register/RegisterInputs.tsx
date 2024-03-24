import React from "react";
import { Input } from "..";

const RegisterInputs = ({
  formData,
  setFormData,
  showEyePass,
  setShowEyePass,
  showEyeConfirm,
  setShowEyeConfirm,
}) => {
  return (
    <div className="mt-6 space-y-4 ">
      <Input
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        type="text"
        placeholder="Name"
      />
      <Input
        value={formData.surname}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, surname: e.target.value }))
        }
        type="text"
        placeholder="Surname"
      />
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
        {...{ showEye: showEyePass, setShowEye: setShowEyePass }}
      />
      <Input
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            confirmPassword: e.target.value,
          }))
        }
        type="password"
        placeholder="Confirm Password"
        {...{ showEye: showEyeConfirm, setShowEye: setShowEyeConfirm }}
      />
    </div>
  );
};

export default RegisterInputs;
