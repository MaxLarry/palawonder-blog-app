"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoogleSvg from "@/src/svg/google.svg";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuthGoogle } from "@/src/hooks/useAuth";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { ClipLoader } from "react-spinners";
import { supabase } from "@/src/utils/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Page = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  const { signInWithGoogle } = useAuthGoogle();
  const [canResend, setCanResend] = useState(true);
  const [resendTimer, setResendTimer] = useState(0);
  const [otp, setOtp] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const handleNextClick = () => {
    if (!emailRegex.test(email)) {
      toast({ title: "Please enter a valid email.", variant: "destructive" });
      return;
    }
    setLoading(true);
    
    // Simulate async action like sending email
    setTimeout(() => {
      // setLoading(false);
      handleSendOtp();
      setDialogOpen(true);
    }, 1000); // Adjust timing as needed
  };



  const handleResendCode = () => {
    if (!canResend) return;

    // Send your verification code logic here
    toast({ title: "Verification code resent to your email." });

    setCanResend(false);
    setResendTimer(300); // 5 minutes
  };



  useEffect(() => {
    if (dialogOpen) {
      setCanResend(false);
      setResendTimer(300); // start 5-minute timer
    }
  }, [dialogOpen]);



  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendTimer > 0) {
      timer = setTimeout(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (!canResend) {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [resendTimer, canResend]);


  // Verify OTP after OTP state is updated
  useEffect(() => {
    if (otp.length === 6) {
      handleVerifyOtp();
    }
  }, [otp]); // This runs when 'otp' state is updated


  const handleSendOtp = async () => {
    const { data, error } = await supabase.auth.signInWithOtp({ email,  
      options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: true,
    }, })

    if (error) {
      toast({ title: 'Failed to send OTP. Please try again.',
        variant: "destructive",
      });
      console.error(error)
    } else {
      toast({ title: 'OTP sent to your email.', 
        variant: "success",
       });
    }
  }

  const handleVerifyOtp = async () => {
     // Log the input values to help with debugging
  console.log("Verifying OTP with:", { email, otpEntered: otp });

    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: 'email',
    });
  
    if (error) {
      console.error("Error during OTP verification:", error);  // Log error details
      toast({
        title: "OTP verification failed.",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "OTP verified",
        variant: "success",
      });
      console.log("User:", data.user);
    }
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
    console.log("OTP entered:", value); //debugging to check OTP input
  };
  return (
    <>
      <div className="flex flex-col justify-center min-h-full py-12 mt-auto mb-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="relative p-8 sm:p-10 space-y-6 border rounded-xl">
            <div className="text-center space-y-3">
              <h2 className="">Create your account</h2>
              <p className="small">
                Start your journey through Palawan. No sign-up fees, just
                stories.
              </p>
            </div>
            <div>
              <form className="space-y-3">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl dark:bg-zinc-900 text-xs md:text-sm lg:text-base bg-slate-50"
                />
              </form>
              <Button
                variant="default"
                type="button"
                disabled={loading}
                onClick={handleNextClick}
                className="w-full rounded-xl mt-5"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <ClipLoader color="#ffffff" size={20} />
                    <p className="small">Next</p>
                  </span>
                ) : (
                  <p className="small">Next</p>
                )}
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <div className="justify-center pb-9">
              <Button className="w-full rounded-xl" onClick={signInWithGoogle}>
                <div className="flex justify-center gap-3">
                  <Image
                    src={GoogleSvg}
                    width={24}
                    height={24}
                    alt="Google icon"
                  />
                  <p className="small">Sign up with Google</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <Toaster />
      </div>

      {dialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="w-full max-w-xl p-3 rounded-xl shadow-lg bg-background mx-5">
            <CardHeader className="space-y-2">
              <CardTitle>Email Verification</CardTitle>
              <CardDescription>
                We've sent a 6-digit code to your email. Enter it below to
                verify your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <InputOTP maxLength={6} value={otp} onChange={handleOtpChange}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-sm text-muted-foreground">
                Didn’t receive the code?{" "}
                <button
                  disabled={!canResend}
                  className={`${
                    canResend
                      ? "text-teal-600 hover:underline"
                      : "text-gray-400"
                  }`}
                  onClick={handleResendCode}
                >
                  {canResend
                    ? "Resend code"
                    : `Wait ${Math.floor(resendTimer / 60)}:${String(
                        resendTimer % 60
                      ).padStart(2, "0")}`}
                </button>
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Page;
