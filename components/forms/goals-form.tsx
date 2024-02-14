"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { Cross2Icon } from "@radix-ui/react-icons"

// Form Schema
const formSchema: z.Schema = z.object({
  shortTerm: z.array(z.string()
    .refine((val) => val.trim().length > 0, { message: "Goal is required" }))
    .max(5, { message: "You can only have at most 5 goals" }),
  longTerm: z.array(z.string()
    .refine((val) => val.trim().length > 0, { message: "Goal is required" }))
    .max(5, { message: "You can only have at most 5 goals" }),
})

export default function GoalsForm() {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shortTerm: [],
      longTerm: [],
    },
  })

  // Short-Term Goals
  const {
    fields: shortTermFields,
    append: shortTermAppend,
    remove: shortTermRemove
  } = useFieldArray({
    control: form.control,
    name: "shortTerm",
  })

  // Long-Term Goals
  const {
    fields: longTermFields,
    append: longTermAppend,
    remove: longTermRemove
  } = useFieldArray({
    control: form.control,
    name: "longTerm",
  })

  // Submit
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  useEffect(() => {
    shortTermAppend("");
    longTermAppend("");
  }, [])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="container flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            {shortTermFields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`shortTerm.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      Short-Term
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      What are your short-term goals?
                    </FormDescription>
                    <FormControl>
                      <div className="flex w-full items-center gap-1">
                        <Input type="text" placeholder="Enter goal" {...field} />
                        {index !== 0 &&
                          <Button type="button" variant="outline" size="icon" onClick={() => shortTermRemove(index)}>
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
            <Button type="button" variant="secondary" size="sm" className="mt-2" onClick={() => shortTermAppend("")}>
              Add Goal
            </Button>
          </div>
          <div>
            {longTermFields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`longTerm.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      Long-Term
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      What are your long-term goals?
                    </FormDescription>
                    <FormControl>
                      <div className="flex w-full items-center gap-1">
                        <Input type="text" placeholder="Enter goal" {...field} />
                        {index !== 0 &&
                          <Button type="button" variant="outline" size="icon" onClick={() => longTermRemove(index)}>
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
            <Button type="button" variant="secondary" size="sm" className="mt-2" onClick={() => longTermAppend("")}>
              Add Goal
            </Button>
          </div>
        </div>
        <Button type="submit" className="w-fit self-end">Save</Button>
      </form>
    </Form>
  )
}
