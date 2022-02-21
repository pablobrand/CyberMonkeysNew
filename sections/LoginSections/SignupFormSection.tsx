import Container from "@/components/Container";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import { useForm, ValidationError } from "@formspree/react";
import { useContext, useState } from "react";
import { AccountContext } from "./accountContext";
import { AiOutlineUser } from "react-icons/ai";


const SignupForm = () => {
  const { switchToLogin } = useContext(AccountContext);
  const [state, handleSubmit] = useForm("mdoyeqnp");

  if (state.succeeded) {
    return (
      <h2 className="text-center text-5xl mb-6 font-bold">
        Thank You for joining us!!
      </h2>
    );
  }
  return (
    <section className="text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-12 gap-4 pt-40">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <h1 className="text-center text-5xl mb-1">Join us!</h1>
            <h4 className="text-center text-2xl mb-6 font-bold">
              Sign up to continue
            </h4>
            <div className="w-full flex flex-col items-center mt-8">
              <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Name" />
                <Input className="mt-2" type="email" placeholder="Email" />
                <Input
                  type="password"
                  placeholder="Password"
                  className="mt-2"
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="mt-2"
                />
                <Input
                  type="text"
                  placeholder ="Authentication Code"
                  className="mt-2"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            className="px-10 text-xl rounded-full"
            type="submit"
            disabled={state.submitting}
          >
            Sign Up
          </Button>
          <ValidationError errors={state.errors} />
        </div>

        <div className="text-center pt-2 ">
          <a className="text-sm text-white font-medium">
            Already have an account?{" "}
            <a
              className="text-yelloww cursor-pointer"
              href="#"
              onClick={switchToLogin}
            >
              Log in
            </a>
          </a>
        </div>
      </Container>
    </section>
  );
};
export default SignupForm;
