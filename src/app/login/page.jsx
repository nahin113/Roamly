"use client";

import Link from "next/link";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Card,
} from "@heroui/react";
import { User, Mail, Lock } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password
    });

    console.log(data,error)

    if (data) redirect("/");
    if (error) {
      alert("Error");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-normal text-gray-900 mb-2">
          Login Account
        </h1>
        <p className="text-gray-500">Start your adventure with Roamly</p>
      </div>

      <Card className="w-full max-w-[440px] p-8 shadow-sm border border-gray-100 bg-white rounded-sm">
        <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>

          {/* Email Address */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full flex flex-col gap-1.5"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="font-semibold text-gray-800 text-sm">
              Email Address
            </Label>
            <div className="relative flex items-center">
              <Mail size={16} className="text-gray-400 absolute left-3" />
              <Input
                placeholder="Enter your email"
                className="rounded-sm bg-gray-50/80 border border-gray-100 shadow-none h-11 w-full pl-10 pr-3 outline-none focus:border-[#1FB6CD] transition-colors"
              />
            </div>
            <FieldError className="text-red-500 text-sm" />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full flex flex-col gap-1.5"
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              return null;
            }}
          >
            <Label className="font-semibold text-gray-800 text-sm">
              Password
            </Label>
            <div className="relative flex items-center">
              <Lock size={16} className="text-gray-400 absolute left-3" />
              <Input
                type="password"
                placeholder="Create a password"
                className="rounded-sm bg-gray-50/80 border border-gray-100 shadow-none h-11 w-full pl-10 pr-3 outline-none focus:border-[#1FB6CD] transition-colors"
              />
            </div>
            <FieldError className="text-red-500 text-sm" />
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full rounded-sm bg-[#1FB6CD] text-white font-medium text-base h-11 mt-2 hover:bg-[#199db1] border-none"
          >
            Login Account
          </Button>

          {/* Divider */}
          <div className="relative flex items-center py-2 w-full">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">
              Or log in with
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Google Sign Up Button (Icon moved inside children) */}
          <Button
            variant="outline"
            className="w-full rounded-sm border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 h-11 font-medium flex items-center justify-center gap-2"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path
                  fill="#4285F4"
                  d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                />
                <path
                  fill="#34A853"
                  d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                />
                <path
                  fill="#FBBC05"
                  d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                />
                <path
                  fill="#EA4335"
                  d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                />
              </g>
            </svg>
            Login With Google
          </Button>

          {/* Footer Link */}
          <div className="text-center mt-2">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-[#1FB6CD] font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
