import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="h-[100%] w-[100%] flex">
      <div className="p-10 md:w-[40%] h-[100%] flex flex-col justify-between items-start">
        <div className="m-auto">
          <Logo />
          <p className="mt-4">
            Welcome back to DigiBallot. Log in to your account to access your
            voting dashboards, polls, and participation history.
          </p>
          <div className="my-5">
            <Input
              value={email}
              setValue={setEmail}
              placeholder="johndoe@example.com"
            />
          </div>
          <button className="bg-transparent underline hover:text-green-600">
            Send Login Link
          </button>
        </div>
        <button className="text-sm bg-transparent ">
          Don't have account?{" "}
          <Link to={"/auth/signup"} className="hover:text-green-600">
            Register here
          </Link>
        </button>
      </div>
      <div className="hidden md:block h-[100vh] w-[60%]">
        <img
          src="https://images.unsplash.com/photo-1639754391037-98dd3cb74e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Login;
