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
import countriesToStates from "@/data/country-states.json";
import languagesData from "@/data/languages.json";
import { updateUser } from "@/lib/actions/user.actions";
import type { WithId, Document } from "mongodb";
import MultiSelect from "../ui/multi-select";

// Form Schema
const formSchema: z.Schema = z.object({
  countries: z.array(z.string()),
  languages: z.array(z.string()),
  description: z.string(),
});

export default function FamilyForm({ user }: { user: WithId<Document> }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countries: user.family.countries as string[],
      languages: user.family.languages as string[],
      description: user.family.description as string,
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    await updateUser(user.clerkId, { family: values });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="container flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="countries"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Countries</FormLabel>
              <MultiSelect
                options={countriesToStates.map((value) => value.country)}
                value={field.value}
                onChange={field.onChange}
                capacity={5}
              />
              <FormMessage />
              <FormDescription>Select up to 5 countries.</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages</FormLabel>
              <MultiSelect
                options={languagesData}
                value={field.value}
                onChange={field.onChange}
                capacity={5}
              />
              <FormMessage />
              <FormDescription>Select up to 5 languages.</FormDescription>
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
                  maxLength={1000}
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-fit self-end"
          disabled={!form.formState.isDirty}
        >
          Save
        </Button>
      </form>
    </Form>
  );
}
