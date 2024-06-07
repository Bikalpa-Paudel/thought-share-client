"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { Button } from "../ui/button";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { signup } from "@/services/(api)/auth";

function VerifyUser({
  email,
  password,
  username,
}: {
  email: string;
  password: string;
  username: string;
}) {
  const [otp, setOtp] = useState("");
  console.log(otp);
  const route = useRouter();
  const { data, mutate, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      route.push("/login");
    },
  });
  const onSignup = () => {
    if (otp.length !== 6) {
      alert("Invalid OTP");
      return;
    }
    mutate({ email, password, username, otp });
  };

  return (
    <div className="absolute inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="p-6 bg-[#000000] rounded-lg text-[#fff] flex flex-col gap-4 items-center">
        <h1 className="text-xl font-bold">Enter OTP </h1>
        <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button onClick={onSignup}>Verify OTP</Button>
      </div>
    </div>
  );
}

export default VerifyUser;
