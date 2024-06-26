"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { updateUser } from "@/lib/actions/user.actions";
import type { WithId, Document } from "mongodb";
import MultiSelect from "@/components/ui/multi-select";
import { spouse as tags } from "@/data/form-data";

// Form Schema
const formSchema: z.Schema = z.object({
  qualities: z.array(z.string()),
  dealBreakers: z.array(z.string()),
  tags: z.array(z.string()),
});

export default function SpouseForm({ user }: { user: WithId<Document> }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      qualities: user.spouse.qualities as string[],
      dealBreakers: user.spouse.dealBreakers as string[],
      tags: user.spouse.tags as string[],
    },
  });

  const {
    fields: qualitiesFields,
    append: qualitiesAppend,
    remove: qualitiesRemove,
  } = useFieldArray({
    control: form.control,
    name: "qualities",
  });

  const {
    fields: dealBreakersFields,
    append: dealBreakersAppend,
    remove: dealBreakersRemove,
  } = useFieldArray({
    control: form.control,
    name: "dealBreakers",
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    values.tags = Array.from(values.tags);
    await updateUser(user.clerkId, { spouse: values });
  }

  useEffect(() => {
    if (!user.spouse.qualities.length) qualitiesAppend("");
    if (!user.spouse.dealBreakers.length) dealBreakersAppend("");
  }, []);

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
                value={field.value}
                onChange={field.onChange}
                capacity={5}
              />
              <FormMessage />
              <FormDescription>Select up to 5 tags.</FormDescription>
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
                        <Input
                          type="text"
                          placeholder="Please enter"
                          required
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => qualitiesRemove(index)}
                          disabled={!index}
                        >
                          <Cross2Icon />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="mt-2"
              onClick={() => qualitiesAppend("")}
              disabled={qualitiesFields.length >= 5}
            >
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
                        <Input
                          type="text"
                          placeholder="Please enter"
                          required
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => dealBreakersRemove(index)}
                          disabled={!index}
                        >
                          <Cross2Icon />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="mt-2"
              onClick={() => dealBreakersAppend("")}
              disabled={dealBreakersFields.length >= 5}
            >
              Add Deal-Breaker
            </Button>
          </div>
        </div>
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
