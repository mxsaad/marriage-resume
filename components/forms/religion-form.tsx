"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { aqeedah, madhab } from "@/data/form-data";

// Form Schema
const formSchema: z.Schema = z.object({
  aqeedah: z.string(),
  madhab: z.string(),
  practice: z
    .string()
    .max(1000, { message: "Must be at most 1000 characters long" }),
  knowledge: z
    .string()
    .max(1000, { message: "Must be at most 1000 characters long" }),
});

export default function ReligionForm() {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      aqeedah: "",
      madhab: "",
      practice: "",
      knowledge: "",
    },
  });

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
        <div className="flex flex-wrap gap-4">
          <FormField
            control={form.control}
            name="aqeedah"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Aqeedah</FormLabel>
                <Select onValueChange={field.onChange} required>
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
                <FormDescription>
                  Your religious creed or belief.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="madhab"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Madhab</FormLabel>
                <Select onValueChange={field.onChange} required>
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
                <FormDescription>Your school of jurisprudence.</FormDescription>
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
                  required
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
