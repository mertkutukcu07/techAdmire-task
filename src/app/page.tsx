"use client";
import React from "react";
import { Footer, Header, Login } from "./components";
import { AuthType } from "./enums/Auth";

export default function Home() {
  const [currentAuthType, setCurrentAuthType] = React.useState<AuthType>(
    AuthType.login
  );
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        {currentAuthType === AuthType.login ? <Login /> : <></>}
      </div>
      <Footer />
    </div>
  );
}
