"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
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
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import locationsData from "@/data/locations.json";
import languagesData from "@/data/languages.json";
import { updateUser } from "@/lib/actions/user.actions";

// Form Schema
const formSchema: z.Schema = z.object({
  countries: z.set(z.string()),
  languages: z.set(z.string()),
  description: z.string(),
});

export default function FamilyForm({ clerkId }: { clerkId: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countries: new Set<string>(),
      languages: new Set<string>(),
      description: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    values.countries = Array.from(values.countries);
    values.languages = Array.from(values.languages);
    await updateUser(clerkId, { family: values });
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
                          ? Array.from(field.value).map((country, index) => (
                              <Badge key={index}>{country as string}</Badge>
                            ))
                          : "Please select"}
                      </span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search countries..."
                      className="h-9"
                    />
                    <CommandEmpty>No countries found.</CommandEmpty>
                    <CommandGroup>
                      {locationsData.map((country: any, index: number) => (
                        <CommandItem
                          key={index}
                          value={country.countryName}
                          onSelect={() => {
                            if (field.value.has(country.countryName)) {
                              field.value.delete(country.countryName);
                              form.setValue("countries", field.value);
                            } else if (field.value.size < 5)
                              form.setValue(
                                "countries",
                                field.value.add(country.countryName),
                              );
                          }}
                        >
                          {country.countryName}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              field.value.has(country.countryName)
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
                          ? Array.from(field.value).map((language, index) => (
                              <Badge key={index}>{language as string}</Badge>
                            ))
                          : "Please select"}
                      </span>
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search languages..."
                      className="h-9"
                    />
                    <CommandEmpty>No languages found.</CommandEmpty>
                    <CommandGroup>
                      {languagesData.map((language: string, index: number) => (
                        <CommandItem
                          key={index}
                          value={language}
                          onSelect={() => {
                            if (field.value.has(language)) {
                              field.value.delete(language);
                              form.setValue("languages", field.value);
                            } else if (field.value.size < 5)
                              form.setValue(
                                "languages",
                                field.value.add(language),
                              );
                          }}
                        >
                          {language}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              field.value.has(language)
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
        <Button type="submit" className="w-fit self-end">
          Save
        </Button>
      </form>
    </Form>
  );
}
