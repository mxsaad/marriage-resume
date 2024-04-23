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
import { updateUser } from "@/lib/actions/user.actions";
import type { WithId, Document } from "mongodb";

const formSchema: z.Schema = z.object({
  email: z.string().email(),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});

export default function ContactForm({ user }: { user: WithId<Document> }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user.contact.email as string,
      phone: user.contact.phone as string,
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    await updateUser(user.clerkId, { contact: values });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
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
                  <Input
                    type="email"
                    placeholder="Please enter"
                    required
                    {...field}
                  />
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
                  <PhoneInput
                    defaultCountry="US"
                    placeholder="Please enter"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  The phone number matches can reach you at.
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="w-fit self-end"
          disabled={!form.formState.isDirty}
        >
          Save
        </Button>
      </form>
    </Form>
  );
}
