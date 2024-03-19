"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { CaretSortIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { updateUser } from "@/lib/actions/user.actions";

// Form Schema
const formSchema: z.Schema = z.object({
  qualities: z.array(z.string()),
  dealBreakers: z.array(z.string()),
  tags: z.set(z.string()),
});

const tags = [
  "Romantic",
  "Loyal",
  "Funny",
  "Alpha",
  "Beta",
  "Introvert",
  "Extrovert",
  "Adventurous",
];

export default function SpouseForm({ clerkId }: { clerkId: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tags: new Set<string>(),
      qualities: [],
      dealBreakers: [],
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
    await updateUser(clerkId, { spouse: values });
  }

  useEffect(() => {
    qualitiesAppend("");
    dealBreakersAppend("");
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
                            } else if (field.value.size < 5)
                              form.setValue("tags", field.value.add(tag));
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
                        {index !== 0 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => qualitiesRemove(index)}
                          >
                            <Cross2Icon />
                          </Button>
                        )}
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
              disabled={qualitiesFields.length === 5}
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
                        {index !== 0 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => dealBreakersRemove(index)}
                          >
                            <Cross2Icon />
                          </Button>
                        )}
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
              disabled={dealBreakersFields.length === 5}
            >
              Add Deal-Breaker
            </Button>
          </div>
        </div>
        <Button type="submit" className="w-fit self-end">
          Save
        </Button>
      </form>
    </Form>
  );
}
