"use client"

import Image from "next/image"
import { UserAuthForm } from "@/components/shared/user-auth-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AuthenticationPage() {
  let [isLoggingIn, setIsLoggingIn] = useState<boolean>(false)

  return (
    <main className="w-screen min-h-screen">
      <div className="flex">
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
        <section className="bg-background w-full lg:w-1/2 h-screen flex items-center justify-center">
          <div className="mx-auto flex w-2/3 flex-col justify-center space-y-2 max-w-[350px]">
            <div className="flex flex-col space-y-2 text-center mb-4">
              <h1 className="text-2xl font-semibold tracking-tight">
                {isLoggingIn ? "Welcome Back!" : "Join MarriageResume"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {isLoggingIn ? "Get access to your beautiful profile." : "Create a free account to get started."}
              </p>
            </div>
            <UserAuthForm isLoggingIn={isLoggingIn} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              {isLoggingIn ? "Don't have an account? " : "Already have an account? "}
              <Button variant="link" className="px-0" onClick={() => setIsLoggingIn(!isLoggingIn)}>
                {isLoggingIn ? "Sign up" : "Sign in"}
              </Button>.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}