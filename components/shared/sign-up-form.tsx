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
import { useToast } from "../ui/use-toast"
import { useSignUp } from "@clerk/nextjs";
import { Toaster } from "../ui/toaster"

// Form Schema
const formSchema: z.Schema = z.object({
  username: z.string()
    .regex(/^[a-z,A-Z,0-9,_]+$/, { message: "Username can only contain letters, numbers, and underscores" })
    .min(4, { message: "Username must be at least 4 characters long" }),
  emailAddress: z.string().email({ message: "Please enter a valid email" }),
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
  const { isLoaded, signUp, setActive } = useSignUp();
  const { toast } = useToast();

  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
    },
  })
  // Submit to Clerk
  async function onSubmit(values: z.infer<typeof formSchema>, error: any) {
    error.preventDefault();
    if (!isLoaded) return;

    const { username, emailAddress, password } = values;
    await signUp
      .create({ username, emailAddress, password })
      .then((result) => {
        if (result.status === "complete")
          setActive({ session: result.createdSessionId });
      })
      .catch((err) => {
        toast({
          title: "Error creating account",
          description: err.errors[0].longMessage,
        })
      });
  }

  return (
    <Form {...form}>
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
          name="emailAddress"
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
    </Form>
  )
}