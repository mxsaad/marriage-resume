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
import { cn } from "@/lib/utils";
import { Cross2Icon } from "@radix-ui/react-icons";
import { updateUser } from "@/lib/actions/user.actions";
import type { WithId, Document } from "mongodb";

const formSchema: z.Schema = z.object({
  shortTerm: z.array(z.string()),
  longTerm: z.array(z.string()),
});

export default function GoalsForm({ user }: { user: WithId<Document> }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shortTerm: user.goals.shortTerm as string[],
      longTerm: user.goals.longTerm as string[],
    },
  });

  const {
    fields: shortTermFields,
    append: shortTermAppend,
    remove: shortTermRemove,
  } = useFieldArray({
    control: form.control,
    name: "shortTerm",
  });

  const {
    fields: longTermFields,
    append: longTermAppend,
    remove: longTermRemove,
  } = useFieldArray({
    control: form.control,
    name: "longTerm",
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    await updateUser(user.clerkId, { goals: values });
  }

  useEffect(() => {
    if (!user.goals.shortTerm.length) shortTermAppend("");
    if (!user.goals.longTerm.length) longTermAppend("");
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="container flex flex-col gap-4"
      >
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
                          onClick={() => shortTermRemove(index)}
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
              onClick={() => shortTermAppend("")}
              disabled={shortTermFields.length >= 5}
            >
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
                          onClick={() => longTermRemove(index)}
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
              onClick={() => longTermAppend("")}
              disabled={longTermFields.length >= 5}
            >
              Add Goal
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
