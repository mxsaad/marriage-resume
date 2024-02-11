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
  FormDescription,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "../ui/textarea"

// Form Schema
const formSchema: z.Schema = z.object({
  height: z.string({ required_error: "Height is required" }),
  weight: z.number({ required_error: "Weight is required" })
    .int()
    .min(50, { message: "Must be at least 50 lbs" })
    .max(500, { message: "Must be at most 600 lbs" }),
  complexion: z.string({ required_error: "Complexion is required" }),
  build: z.string({ required_error: "Build is required" }),
  dress: z.string({ required_error: "Dress is required" })
    .max(1000, { message: "Must be at most 1000 characters long" }),
  grooming: z.string({ required_error: "Grooming is required" })
    .max(1000, { message: "Must be at most 1000 characters long" }),
  other: z.string()
    .max(1000, { message: "Must be at most 1000 characters long" })
    .optional(),
})

const height = [
  "4' 0\"",
  "4' 1\"",
  "4' 2\"",
  "4' 3\"",
  "4' 4\"",
  "4' 5\"",
  "4' 6\"",
  "4' 7\"",
  "4' 8\"",
  "4' 9\"",
  "4' 10\"",
  "4' 11\"",
  "5' 0\"",
  "5' 1\"",
  "5' 2\"",
  "5' 3\"",
  "5' 4\"",
  "5' 5\"",
  "5' 6\"",
  "5' 7\"",
  "5' 8\"",
  "5' 9\"",
  "5' 10\"",
  "5' 11\"",
  "6' 0\"",
  "6' 1\"",
  "6' 2\"",
  "6' 3\"",
  "6' 4\"",
  "6' 5\"",
  "6' 6\"",
  "6' 7\"",
  "6' 8\"",
  "6' 9\"",
  "6' 10\"",
  "6' 11\"",
  "7' 0\"",
  "7' 1\"",
  "7' 2\"",
  "7' 3\"",
  "7' 4\"",
  "7' 5\"",
  "7' 6\"",
  "7' 7\"",
  "7' 8\"",
  "7' 9\"",
  "7' 10\"",
  "7' 11\"",
  "8' 0\"",
]

const complexion = [
  "Fair",
  "Olive",
  "Brown",
  "Dark",
  "Other",
]

const build = [
  "Slim",
  "Average",
  "Athletic",
  "Muscular",
  "Heavy",
]

export default function AppearanceForm() {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      height: "5' 6\"",
      weight: 150,
      complexion: "Fair",
      build: "Average",
      dress: "Not specified",
      grooming: "Not specified",
      other: "Not specified",
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
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {height.map((value, index) => (
                      <SelectItem key={index} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>
                  Your height in feet and inches.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={50}
                    max={600}
                    placeholder="Please select"
                    {...field}
                    onChange={event => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  Your weight in pounds.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="complexion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Complexion</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {complexion.map((value, index) => (
                      <SelectItem key={index} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>
                  Your skin complexion.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="build"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Build</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {build.map((value, index) => (
                      <SelectItem key={index} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>
                  Your body build.
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="dress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dress</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your style of dressing."
                  className="min-h-32 resize-y max-h-64"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grooming"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grooming</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your grooming habits."
                  className="min-h-32 resize-y max-h-64"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="other"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any other details about your appearance."
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
