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
  tags: z.set(z.string())
    .max(3, { message: "You can only have at most 3 tags" }),
  description: z.string()
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
      tags: new Set<string>(),
      description: "",
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
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-start h-fit gap-2 font-normal"
                    >
                      <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
                      <span className="flex flex-wrap-reverse gap-2">
                        {field.value.size
                          ? Array.from(field.value).map((tag, index) => (
                              <Badge key={index}>{tag as string}</Badge>
                            ))
                          : "Please select"}
                      </span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search tags..."
                      className="h-9"
                    />
                    <CommandEmpty>No tags found.</CommandEmpty>
                    <CommandGroup>
                      {tags.map((tag: string, index: number) => (
                        <CommandItem
                          key={index}
                          value={tag}
                          onSelect={() => {
                            if (field.value.has(tag)) {
                              field.value.delete(tag);
                              form.setValue("tags", field.value);
                            } else if (field.value.size < 3)
                              form.setValue(
                                "tags",
                                field.value.add(tag),
                              );
                          }}
                        >
                          {tag}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              field.value.has(tag)
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
              <FormDescription>Select up to 3 tags.</FormDescription>
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
                  required
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
