"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendOtp } from "@/services/(api)/auth";
import { useMutation } from "react-query";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import VerifyUser from "./VerifyUser";

export default function Signup() {
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;

  const { data, mutate, isLoading } = useMutation({
    mutationFn: sendOtp,
    onSuccess: (data) => {
      setShowOtp(true);
    },
  });

  const onSendOtp = () => {
    if (!emailRegex.test(email)) {
      alert("Invalid email");
      return;
    }
    if (!passwordRegex.test(password)) {
      alert("Invalid password");
      return;
    }
    if (!usernameRegex.test(username)) {
      alert("Invalid username");
      return;
    }
    mutate({ email, password, username });
  };

  return (
    <div className="w-full lg:grid lg:grid-cols-2 flex justify-center items-center h-screen ">
      {isLoading && (
        <div className="absolute inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="p-4 bg-white rounded-lg">
            <p>loading</p>
          </div>
        </div>
      )}
      {showOtp && (
        <VerifyUser email={email} password={password} username={username} />
      )}

      <div className="hidden bg-muted lg:block relative h-full">
        <Image
          src="/placeholder.svg"
          alt="Image"
          fill={true}
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12 h-full">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Signup</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Bikalpa Paudel"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button onClick={onSendOtp} className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
