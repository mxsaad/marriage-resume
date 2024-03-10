"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import locations from "@/data/locations.json";
import { useEffect, useState } from "react";

// Form Schema
const formSchema: z.Schema = z.object({
  name: z.string().max(32, { message: "Must be at most 32 characters long" }),
  highlights: z
    .set(z.string())
    .max(3, { message: "You can only have up to 3 highlights" }),
  dob: z.string({ required_error: "Date of Birth is required" }).pipe(
    z.coerce.date().max(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000), {
      message: "Must be at least 18 years old",
    }),
  ),
  gender: z.string(),
  status: z.string(),
  location: z.object({
    state: z.string(),
    country: z.string(),
  }),
  bio: z.string().max(256, { message: "Must be at most 256 characters long" }),
});

// Tags
const highlights = [
  "Hafiz",
  "Alim",
  "Qari",
  "Hafiza",
  "Alima",
  "Qaria",
  "Student",
  "Teacher",
  "Parent",
  "Married",
  "Single",
  "Divorced",
  "Widowed",
];

export default function SummaryForm() {
  const [country, setCountry] = useState();
  const [states, setStates] = useState([]);

  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      highlights: new Set<string>(),
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

  // Update states based on country
  useEffect(() => {
    const country = form.getValues("location.country");
    if (country) {
      const countryData: any = locations.find(
        (value: any) => value.countryName === country,
      );
      setStates(countryData?.regions);
    }
  }, [form.watch("location.country")]);

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
                  <Input type="date" required {...field} />
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
          name="highlights"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Highlights</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-start h-fit gap-2 font-normal"
                    >
                      <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
                      <span className="flex flex-wrap-reverse gap-2">
                        {field.value.size
                          ? Array.from(field.value).map((highlight, index) => (
                              <Badge key={index}>{highlight as string}</Badge>
                            ))
                          : "Please select"}
                      </span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search highlights..."
                      className="h-9"
                    />
                    <CommandEmpty>No highlights found.</CommandEmpty>
                    <CommandGroup>
                      {highlights.map((highlight: string, index: number) => (
                        <CommandItem
                          key={index}
                          value={highlight}
                          onSelect={() => {
                            if (field.value.has(highlight)) {
                              field.value.delete(highlight);
                              form.setValue("highlights", field.value);
                            } else if (field.value.size < 5)
                              form.setValue(
                                "highlights",
                                field.value.add(highlight),
                              );
                          }}
                        >
                          {highlight}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              field.value.has(highlight)
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
              <FormDescription>Select up to 5 highlights.</FormDescription>
            </FormItem>
          )}
        />
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
