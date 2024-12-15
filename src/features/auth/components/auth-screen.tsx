"use client";

import React, { useState } from "react";
import { SignInFLow } from "../types";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

type Props = {};

const AuthScreen = ({}: Props) => {
  const [state, setState] = useState<SignInFLow>("signIn");

  return (
    <div className="h-screen flex items-center justify-center bg-[#5c3b58]">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
