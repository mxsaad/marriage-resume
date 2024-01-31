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
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Form Schema
const formSchema = z.object({
  identifier: z.string(),
  password: z.string()
})

export default function SignUpForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const { toast } = useToast();
  const router = useRouter();

  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  })
  // Submit to Clerk
  async function onSubmit(values: z.infer<typeof formSchema>, error: any) {
    error.preventDefault();
    if (!isLoaded) return;

    const { identifier, password } = values;
    await signIn
      .create({ identifier, password })
      .then(async (result) => {
        if (result.status === "complete") {
          await setActive({ session: result.createdSessionId })
          router.replace("/profile");
        }
      })
      .catch((err) => {
        toast({
          title: "Error signing in",
          description: err.errors[0].longMessage,
        })
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="identifier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username or Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="saad" {...field} />
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
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  )
}