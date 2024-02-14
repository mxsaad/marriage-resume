"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

// Form Schema
const formSchema: z.Schema = z.object({
  name: z.string({ required_error: "Name is required" })
    .max(32, { message: "Must be at most 32 characters long" }),
  highlights: z.array(z.string())
    .max(3, { message: "You can only have up to 3 highlights" }),
  dob: z.string({ required_error: "Date of Birth is required" })
    .pipe(z.coerce.date()
      .max(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000), { message: "Must be at least 18 years old" })),
  gender: z.enum(["Brother", "Sister"], { required_error: "Gender is required" }),
  status: z.enum(["Single", "Divorced", "Widowed", "Married"], { required_error: "Status is required" }),
  location: z.object({
    state: z.string({ required_error: "State is required" }),
    country: z.string({ required_error: "Country is required" }),
  }),
  bio: z.string({ required_error: "Bio is required" })
    .max(256, { message: "Must be at most 256 characters long" }),
})

// Tags
const tags = [
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
]

const status = [
  "Single",
  "Divorced",
  "Widowed",
  "Married",
]

const countries = [
  "Australia",
  "Canada",
  "United Kingdom",
  "United States",
]

const states = [
  "ACT",
  "NSW",
  "NT",
  "QLD",
  "SA",
  "TAS",
  "VIC",
  "WA",
  "AL",
]

export default function SummaryForm() {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Anonymous User",
      highlights: [],
      dob: '2000-01-01',
      gender: "Brother",
      status: "Single",
      location: {
        state: "AL",
        country: "United States",
      },
      bio: "Not specified",
    },
  })

  // Submit
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="container flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Your full name." {...field} />
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
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Used to calculate your age.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue="Brother">
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
                <FormDescription>
                  Either brother or sister.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {status.map((value, index) => (
                      <SelectItem key={index} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>
                  Your current marital status.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location.country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((value, index) => (
                      <SelectItem key={index} value={value}>
                        {value}
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
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {states.map((value, index) => (
                      <SelectItem key={index} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>
                  Your current state/province.
                </FormDescription>
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
                    <Button variant="outline" role="combobox" className={cn(
                      "w-full justify-start h-fit gap-2",
                      !field.value && "text-muted-foreground"
                    )}>
                      <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
                      <span className="flex flex-wrap-reverse gap-2">
                        {field.value.map((value: string, index: number) => (
                          <Badge key={index}>{value}</Badge>
                        ))}
                      </span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-0">
                  <Command>
                    <CommandInput placeholder="Search tags..." className="h-9" />
                    <CommandEmpty>No tags found.</CommandEmpty>
                    <CommandGroup>
                      {tags.map((value, index) => (
                        <CommandItem
                          key={index}
                          onSelect={() => {
                            if (field.value.includes(value))
                              form.setValue("highlights", field.value.filter((tag: string) => tag !== value))
                            else if (field.value.length < 3)
                              form.setValue("highlights", [...field.value, value])
                          }}>
                          {value}
                          <CheckIcon className={cn("ml-auto h-4 w-4", field.value.includes(value) ? "opacity-100" : "opacity-0")} />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
              <FormDescription>
                Select up to 3 tags.
              </FormDescription>
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
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit self-end">Save</Button>
      </form>
    </Form>
  )
}
