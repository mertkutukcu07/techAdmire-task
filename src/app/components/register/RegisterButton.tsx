import React from "react";
import { Button } from "..";

const RegisterButton = ({ loading, handleRegister }) => {
  return (
    <div className="mt-6">
      <Button
        isLoading={loading}
        disabled={loading}
        onClick={handleRegister}
        text="Register"
      />
    </div>
  );
};

export default RegisterButton;
