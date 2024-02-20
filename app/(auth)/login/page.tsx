"use client"

import Image from "next/image"
import SignUpForm from "@/components/shared/sign-up-form"
import SignInForm from "@/components/shared/sign-in-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import SocialLoginButtons from "@/components/shared/social-login-buttons"

export default function AuthenticationPage() {
  let [isSigningUp, setIsSigningUp] = useState(true)

  return (
    <main className="w-screen min-h-screen">
      <div className="flex">
        { /* Hero */}
        <section className="bg-gray-800 w-1/2 h-screen hidden lg:block relative border-r-2">
          <Link href="/" className="absolute top-6 left-6 flex items-center gap-2">
            <Image
              src="/favicon.png"
              alt="MarriageResume Logo"
              width={32}
              height={32}
            />
            <h1 className="text-2xl text-white font-bold tracking-tight">MarriageResume</h1>
          </Link>
          <blockquote className="absolute text-white ml-4 pl-4 px-8 bottom-8 left-4 border-foreground border-l-2 border-white">
            <p className="text-lg italic">
              &ldquo;Not only is it easy to share with others, but it looks stunning!
              Truly a game-changer for Muslims looking to get married.&rdquo;
            </p>
            <footer className="text-sm mt-2">Abu Rijaal</footer>
          </blockquote>
        </section>

        { /* Auth */}
        <section className="bg-background w-full lg:w-1/2 min-h-screen flex items-center justify-center">
          <div className="mx-auto flex w-2/3 flex-col justify-center gap-2 my-12 max-w-[350px]">
            <div className="flex flex-col text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {isSigningUp ? "Join MarriageResume" : "Welcome Back"}
              </h1>
              <p className="text-center text-sm text-muted-foreground">
                {isSigningUp ? "Already have an account? " : "Don't have an account? "}
                <Button variant="link" className="px-0" onClick={() => setIsSigningUp(!isSigningUp)}>
                  {isSigningUp ? "Sign in" : "Sign up"}
                </Button>
              </p>
            </div>
            {/* Form */}
            {isSigningUp ? <SignUpForm /> : <SignInForm />}
            {/* Divider */}
            { /*
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  OR
                </span>
              </div>
            </div>
            {/* Social Login Buttons */}
            {/*
            <SocialLoginButtons />
            */}
          </div>
        </section>
      </div>
    </main>
  )
}
