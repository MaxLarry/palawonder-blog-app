"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoogleSvg from "@/src/svg/google.svg";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import {useAuthGoogle} from '@/src/hooks/useAuth'
import { emailLogin } from "./action";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const { signInWithGoogle } = useAuthGoogle()

  return (
    <div className="flex flex-col justify-center min-h-full py-12 mt-auto mb-auto px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="relative p-8 sm:p-10 space-y-6 border rounded-xl">
          <div className="text-center space-y-3">
            <h2 className="">Login</h2>
            <p className="small">Pick up where your Palawan story left off.</p>
          </div>
          <div>
            <form action="" className="space-y-3">
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl dark:bg-zinc-900 text-xs md:text-sm lg:text-base bg-slate-50"
              />
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-xl dark:bg-zinc-900 text-xs md:text-sm lg:text-base bg-slate-50"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5 text-zinc-700" />
                  ) : (
                    <EyeOff className="h-5 w-5 text-zinc-700" />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember" className="h-4 w-4 border-muted" />
                  <label htmlFor="remember" className="ml-2 text-xs">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-xs hover:underline">
                  Forgot password?
                </a>
              </div>
            </form>
            <Button formAction={emailLogin} className="w-full rounded-xl mt-5">
              <p className="small">Sign in</p>
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
                <p className="small">Sign in with Google</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
