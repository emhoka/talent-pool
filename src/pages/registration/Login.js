import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/widgets/FormInput";
import AuthLayout from "../../components/layout/AuthLayout";
const Login = () => {
  return (
    <AuthLayout
      title="Good to see you back!"
      subTitle="Log in to your account to continue"
    >
      <FormInput title="Email address" type="email" className="mb-5" />
      <FormInput title="Password" type="text" className="mb-5" />
      <Link to="/resetpassword" className="text-green font-medium">
        Forget password
      </Link>
      <button className="mt-5 tracking-wide font-semibold bg-green text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
        <span className="ml-3">Sign In</span>
      </button>
      <p className="mt-4 text-md text-gray-500 text-start">
        Are you new here?
        <Link to="/" className="text-green ml-2  font-medium">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};
export default Login;
