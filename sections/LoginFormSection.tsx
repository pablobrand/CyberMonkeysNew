import Container from "@/components/Container";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import { useForm, ValidationError } from "@formspree/react";

const LoginForm = () => {
  const [state, handleSubmit] = useForm("mdoyeqnp");

  if (state.succeeded) {
    return <h2 className="text-center text-5xl mb-6 font-bold">Thank You!!</h2>;
  }
  return (
    <section className="text-white pt-24">
      <Container>
        <div className="grid grid-cols-12 gap-4 pt-40">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <h2 className="text-center text-3xl mb-1">Welcome Back!</h2>
            <h4 className="text-center text-2xl mb-6 font-bold">
              Log In to continue
            </h4>
            <div className="w-full flex flex-col items-center mt-10">
              <form onSubmit={handleSubmit}>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <div className="text-center pt-2 ">
                  <a className="text-sm text-white font-medium cursor-pointer">
                    Forget your password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Button className="px-10 text-xl rounded-full" type="submit" disabled={state.submitting}>
            Log in
          </Button>
          <ValidationError errors={state.errors} />
        </div>

        <div className="text-center pt-2 ">
                  <a className="text-sm text-white font-medium">
                    Don't have an account? <a className="text-bluee cursor-pointer" href="#">Sign Up</a>
                  </a>
                </div>

      </Container>
    </section>
  );
};
export default LoginForm;
