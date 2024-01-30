"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Form Schema
const formSchema = z.object({
  username: z.string()
    .regex(/^[a-z,A-Z,0-9,_]+$/, { message: "Username can only contain letters, numbers, and underscores" })
    .min(4, { message: "Username must be at least 4 characters long" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string()
    .regex(/^[a-z,A-Z,0-9,!@#$%^&*]+$/, { message: "Password can only contain letters, numbers, and !@#$%^&*" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password must be at most 32 characters long" }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

export default function SignUpForm() {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  // Form Submission Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      {/* Form Fields */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" placeholder="saad" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>

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
      <div className="flex flex-col gap-2">
        <Button variant="outline" type="button">
          <div className="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0,0,256,256"><g fill="#b3b3b3" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(9.84615,9.84615)"><path d="M23.93359,18.94531c-0.59766,1.32422 -0.88281,1.91797 -1.65234,3.08594c-1.07031,1.63672 -2.58594,3.67578 -4.46094,3.6875c-1.66406,0.01563 -2.09375,-1.08594 -4.35547,-1.06641c-2.26172,0.00781 -2.73437,1.08594 -4.40234,1.07031c-1.87109,-0.01562 -3.30469,-1.85547 -4.37891,-3.48437c-3.00391,-4.57422 -3.32031,-9.9375 -1.46484,-12.78906c1.3125,-2.02344 3.39063,-3.21094 5.34375,-3.21094c1.98438,0 3.23438,1.08984 4.87891,1.08984c1.59375,0 2.5625,-1.09375 4.86328,-1.09375c1.73438,0 3.57422,0.94531 4.88672,2.58203c-4.29687,2.35156 -3.59766,8.48828 0.74219,10.12891zM16.55859,4.40625c0.83594,-1.07031 1.46875,-2.58594 1.24219,-4.12891c-1.36719,0.09375 -2.96094,0.96484 -3.89453,2.08984c-0.84375,1.02734 -1.54297,2.55469 -1.26953,4.03125c1.48828,0.04688 3.02734,-0.83984 3.92188,-1.99219z"></path></g></g></svg>
            Continue with Apple
          </div>
        </Button>
        <Button variant="outline" type="button">
          <div className="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
            Continue with Google
          </div>
        </Button>
      </div>
    </Form>
  )
}