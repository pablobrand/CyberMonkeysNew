
import { useState } from "react";

import Container from "@/components/Container";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import { useForm, ValidationError } from "@formspree/react";
import LoginForm from "./LoginFormSection";
import SignupForm from "./SignupFormSection";
import { AccountContext } from "./accountContext";

const LoginSection = () => {
  const [active, setActive] = useState("login");

  const switchToSignup = () => {
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToLogin = () => {
    setTimeout(() => {
      setActive("login");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToLogin };

  return (
    <Container>
      <AccountContext.Provider value={contextValue}>
        {active === "login" && <LoginForm/>}
        {active === "signup" && <SignupForm/>}
      </AccountContext.Provider>
    </Container>
  );
};

export default LoginSection;
