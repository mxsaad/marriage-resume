"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "../ui/badge"
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
import { cn } from "@/lib/utils"

// Form Schema
const formSchema: z.Schema = z.object({
  tags: z.array(z.string())
    .max(3, { message: "You can only have at most 3 tags" }),
  occupation: z.string({ required_error: "Occupation is required" })
    .max(1000, { message: "Must be at most 1000 characters long" })
})

const tags = [
  "Student",
  "Doctor",
  "Engineer",
  "Teacher",
  "Entreprenuer",
  "Millionaire",
  "Billionaire",
]

export default function OccupationForm() {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tags: [],
      occupation: "Not specified",
    },
  })

  // Submit
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="container flex flex-col gap-4">
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
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
                              form.setValue("tags", field.value.filter((tag: string) => tag !== value))
                            else if (field.value.length < 3)
                              form.setValue("tags", [...field.value, value])
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe what you do for a living."
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
