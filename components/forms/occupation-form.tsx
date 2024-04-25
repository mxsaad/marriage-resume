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
import { updateUser } from "@/lib/actions/user.actions";
import type { WithId, Document } from "mongodb";
import MultiSelect from "@/components/ui/multi-select";
import { occupation as tags } from "@/data/form-data"

// Form Schema
const formSchema: z.Schema = z.object({
  tags: z.array(z.string()),
  description: z.string(),
});

export default function OccupationForm({ user }: { user: WithId<Document> }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tags: user.occupation.tags as string[],
      description: user.occupation.description as string,
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    await updateUser(user.clerkId, { occupation: values });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="container flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <MultiSelect
                options={tags}
                capacity={3}
                onChange={field.onChange}
                value={field.value}
              />
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
