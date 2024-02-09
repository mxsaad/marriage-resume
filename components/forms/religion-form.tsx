"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Form Schema
const formSchema: z.Schema = z.object({
  aqeedah: z.string({ required_error: "Aqeedah is required" }),
  madhab: z.string({ required_error: "Madhab is required" }),
  practice: z.string({ required_error: "Practice is required" })
    .max(1000, { message: "Must be at most 1000 characters long" }),
  knowledge: z.string({ required_error: "Knowledge is required" })
    .max(1000, { message: "Must be at most 1000 characters long" }),
})

const aqeedah = [
  "Sunni",
  "Salafi",
  "Shia",
  "Sufi",
  "Deobandi",
  "Barelvi",
  "Qadiani",
  "Ashari",
  "Other",
]

const madhab = [
  "Hanafi",
  "Maliki",
  "Shafi'i",
  "Hanbali",
  "No Madhab",
  "Other",
]

export default function ReligionForm() {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      aqeedah: "Sunni",
      madhab: "Hanafi",
      practice: "Not specified",
      knowledge: "Not specified",
    },
  })

  // Submit
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="container flex flex-col gap-4">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="aqeedah"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Aqeedah</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {aqeedah.map((value, index) => (
                      <SelectItem key={index} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="madhab"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Madhab</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {madhab.map((value, index) => (
                      <SelectItem key={index} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="practice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Practice</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your practice of the religion."
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
          name="knowledge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Knowledge</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your knowledge of the religion."
                  className="min-h-32 resize-y max-h-64"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit">Save</Button>
      </form>
    </Form>
  )
}
