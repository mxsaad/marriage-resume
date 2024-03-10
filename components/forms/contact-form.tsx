"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";

// Form Schema
const formSchema: z.Schema = z.object({
  email: z.string().email(),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});

export default function ContactForm() {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
    },
  });

  // Submit
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container flex flex-col gap-4"
      >
        <p className="text-muted-foreground">
          We will never use this information to contact you. It is only provided
          to matches with your permission for them to contact you.
          <br />
          <br />
          Note: Sisters are expected to fear Allah (ﷻ) and only provide the
          contact information of their <i>wali</i> (guardian) with his
          permission.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Please enter" required {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  This is not your account email, it is only for matches to
                  reach you at.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <PhoneInput defaultCountry="US" placeholder="Please enter" required {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  The phone number matches can reach you at.
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-fit self-end">
          Save
        </Button>
      </form>
    </Form>
  );
}
