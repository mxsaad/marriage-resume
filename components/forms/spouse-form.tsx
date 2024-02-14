"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
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
import { CaretSortIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

// Form Schema
const formSchema: z.Schema = z.object({
  qualities: z.array(z.string()
    .refine((val) => val.trim().length > 0, { message: "Goal is required" }))
    .max(5, { message: "You can only have at most 5 goals" }),
  dealBreakers: z.array(z.string()
    .refine((val) => val.trim().length > 0, { message: "Goal is required" }))
    .max(5, { message: "You can only have at most 5 goals" }),
  tags: z.array(z.string())
    .max(5, { message: "You can only have at most 5 tags" }),
})

const tags = [
  "Romantic",
  "Loyal",
  "Funny",
  "Alpha",
  "Beta",
  "Introvert",
  "Extrovert",
  "Adventurous",
]

export default function SpouseForm() {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tags: [],
      qualities: [],
      dealBreakers: [],
    },
  })

  // Short-Term Goals
  const {
    fields: qualitiesFields,
    append: qualitiesAppend,
    remove: qualitiesRemove
  } = useFieldArray({
    control: form.control,
    name: "qualities",
  })

  // Long-Term Goals
  const {
    fields: dealBreakersFields,
    append: dealBreakersAppend,
    remove: dealBreakersRemove
  } = useFieldArray({
    control: form.control,
    name: "dealBreakers",
  })

  // Submit
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  useEffect(() => {
    qualitiesAppend("")
    dealBreakersAppend("")
  }, [])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="container flex flex-col gap-4">
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Spouse's Tags</FormLabel>
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
                            else if (field.value.length < 5)
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
                Select up to 5 tags.
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            {qualitiesFields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`qualities.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      Qualities
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      What qualities are you looking for in a spouse?
                    </FormDescription>
                    <FormControl>
                      <div className="flex w-full items-center gap-1">
                        <Input type="text" placeholder="Enter quality" {...field} />
                        {index !== 0 &&
                          <Button type="button" variant="outline" size="icon" onClick={() => qualitiesRemove(index)}>
                            <Cross2Icon />
                          </Button>
                        }
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="button" variant="secondary" size="sm" className="mt-2" onClick={() => qualitiesAppend("")}>
              Add Quality
            </Button>
          </div>
          <div>
            {dealBreakersFields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`dealBreakers.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      Deal-Breakers
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      What deal-breakers do you have in a spouse?
                    </FormDescription>
                    <FormControl>
                      <div className="flex w-full items-center gap-1">
                        <Input type="text" placeholder="Enter deal-breaker" {...field} />
                        {index !== 0 &&
                          <Button type="button" variant="outline" size="icon" onClick={() => dealBreakersRemove(index)}>
                            <Cross2Icon />
                          </Button>
                        }
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="button" variant="secondary" size="sm" className="mt-2" onClick={() => dealBreakersAppend("")}>
              Add Deal-Breaker
            </Button>
          </div>
        </div>
        <Button type="submit" className="w-fit self-end">Save</Button>
      </form>
    </Form>
  )
}
