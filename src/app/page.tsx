"use client";
import React from "react";
import { Footer, Header, Login } from "./components";
import { AuthType } from "./enums/Auth";
import Register from "./components/register";

export default function Home() {
  const [currentAuthType, setCurrentAuthType] = React.useState<AuthType>(
    AuthType.login
  );

  const changeAuthType = () => {
    setCurrentAuthType(
      currentAuthType === AuthType.login ? AuthType.register : AuthType.login
    );
  };
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        {currentAuthType === AuthType.login ? (
          <Login handleRegister={changeAuthType} />
        ) : (
          <Register handleLogin={changeAuthType} />
        )}
      </div>
      <Footer />
    </div>
  );
}
