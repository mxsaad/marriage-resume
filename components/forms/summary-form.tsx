"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import locations from "@/data/locations.json";
import { useEffect, useState } from "react";
import { updateUser } from "@/lib/actions/user.actions";

// Form Schema
const formSchema: z.Schema = z.object({
  name: z.string(),
  dob: z.string().pipe(z.coerce.date()),
  gender: z.string(),
  status: z.string(),
  location: z.object({
    state: z.string(),
    country: z.string(),
  }),
  bio: z.string(),
});

export default function SummaryForm({ clerkId }: { clerkId: string }) {
  // Ensure the user is at least 18 years old
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate(),
  ).toISOString().split("T")[0];

  // States for the country
  const [states, setStates] = useState([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dob: "",
      gender: "",
      status: "",
      location: {
        state: "",
        country: "",
      },
      bio: "",
    },
  });

  useEffect(() => {
    // Update states when country changes
    const country = form.getValues("location.country");
    if (country) {
      const countryData: any = locations.find(
        (value: any) => value.countryName === country,
      );
      setStates(countryData?.regions);
    }
  }, [form.watch("location.country")]);

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    await updateUser(clerkId, values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="container flex flex-col gap-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Please enter"
                    maxLength={32}
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  The name shown on your profile.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    max={maxDate}
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Used to calculate your age.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} required>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Brother">Brother</SelectItem>
                    <SelectItem value="Sister">Sister</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>Either brother or sister.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} required>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Single">Single</SelectItem>
                    <SelectItem value="Married">Married</SelectItem>
                    <SelectItem value="Divorced">Divorced</SelectItem>
                    <SelectItem value="Widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>Your current marital status.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location.country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select onValueChange={field.onChange} required>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {locations.map((value: any, index: number) => (
                      <SelectItem key={index} value={value.countryName}>
                        {value.countryName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>
                  Your current country of residence.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location.state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  disabled={!form.getValues("location.country")}
                  required
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {states?.map((value: any, index: number) => (
                      <SelectItem key={index} value={value.name}>
                        {value.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>Your current state/province.</FormDescription>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about yourself."
                  className="min-h-32 resize-y max-h-64"
                  maxLength={256}
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit self-end">
          Save
        </Button>
      </form>
    </Form>
  );
}
