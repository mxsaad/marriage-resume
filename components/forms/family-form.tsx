"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
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
import { cn } from "@/lib/utils"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

// Form Schema
const formSchema: z.Schema = z.object({
  countries: z.array(z.string())
    .max(5, { message: "You can only have at most 5 countries" }),
  languages: z.array(z.string())
    .max(5, { message: "You can only have at most 5 languages" }),
  description: z.string({ required_error: "Description is required" })
    .max(1000, { message: "Must be at most 1000 characters long" }),
})

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Pakistan",
  "Palau",
  "India",
]

const languages = [
  "English",
  "Spanish",
  "French",
  "Arabic",
  "Bengali",
  "Russian",
  "Portuguese",
  "Urdu",
  "Punjabi",
  "German",
]

export default function FamilyForm() {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countries: [],
      languages: [],
      description: "Not specified",
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
          name="countries"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Countries</FormLabel>
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
                    <CommandInput placeholder="Search countries..." className="h-9" />
                    <CommandEmpty>No countries found.</CommandEmpty>
                    <CommandGroup>
                      {countries.map((value, index) => (
                        <CommandItem
                          key={index}
                          onSelect={() => {
                            if (field.value.includes(value))
                              form.setValue("countries", field.value.filter((country: string) => country !== value))
                            else if (field.value.length < 5)
                              form.setValue("countries", [...field.value, value])
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
                Select up to 5 countries.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages</FormLabel>
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
                    <CommandInput placeholder="Search languages..." className="h-9" />
                    <CommandEmpty>No languages found.</CommandEmpty>
                    <CommandGroup>
                      {languages.map((value, index) => (
                        <CommandItem
                          key={index}
                          onSelect={() => {
                            if (field.value.includes(value))
                              form.setValue("languages", field.value.filter((language: string) => language !== value))
                            else if (field.value.length < 5)
                              form.setValue("languages", [...field.value, value])
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
                Select up to 5 languages.
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
                  placeholder="Describe your family's background and situation."
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
