import React from "react";
import { Button } from "..";

const LoginButton = ({ loading, handleLogin }) => {
  return (
    <div className="mt-6">
      <Button
        disabled={loading}
        isLoading={loading}
        onClick={handleLogin}
        text="Login"
      />
    </div>
  );
};

export default LoginButton;
