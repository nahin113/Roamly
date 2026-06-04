"use client";
import { FcGoogle } from "react-icons/fc";
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

    const handleGoogleSignin = async () => {
      await authClient.signIn.social({
        provider: "google",
      });
    };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password
    });

    console.log(data)

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
            <div className="grow border-t border-gray-200"></div>
            <span className="shrink-0 mx-4 text-gray-400 text-sm">
              Or log in with
            </span>
            <div className="grow border-t border-gray-200"></div>
          </div>

          {/* Google Sign Up Button (Icon moved inside children) */}
          <Button
          onClick={handleGoogleSignin}
          type="button"
            variant="outline"
            className="w-full rounded-sm border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 h-11 font-medium flex items-center justify-center gap-2"
          >
            <FcGoogle />
            Login With Google
          </Button>

          {/* Footer Link */}
          <div className="text-center mt-2">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/signup"
                className="text-[#1FB6CD] font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
