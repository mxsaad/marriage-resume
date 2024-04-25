import { CheckIcon, CaretSortIcon } from "@radix-ui/react-icons";

import * as React from "react";

import * as RPNInput from "react-phone-number-input";
import * as RPNInputSimple from "react-phone-number-input/input";

import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Input, InputProps } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export type PhoneInputValue = RPNInput.Value;

type PhoneInputSimpleProps = React.ComponentProps<
  typeof RPNInputSimple.default
>;

const PhoneInputSimple = ({
  className,
  children,
  ...props
}: PhoneInputSimpleProps) => (
  <RPNInputSimple.default
    placeholder="Enter a phone number"
    inputComponent={Input}
    {...props}
  />
);
PhoneInputSimple.displayName = "PhoneInputSimple";

type PhoneInputProps = React.ComponentProps<typeof RPNInput.default>;

const PhoneInput = ({
  className,
  children,
  required,
  ...props
}: PhoneInputProps) => (
  <RPNInput.default
    className={cn("flex", className)}
    placeholder={"Enter a phone number"}
    flagComponent={FlagComponent}
    countrySelectComponent={CountrySelect}
    inputComponent={InputComponent}
    required={required}
    {...props}
  />
);

PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, required, ...props }, ref) => (
    <Input
      className={cn("rounded-s-none rounded-e-md", className)}
      {...props}
      required={required}
      ref={ref}
    />
  ),
);

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: CountrySelectOption[];
};

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = React.useCallback(
    (country: RPNInput.Country) => {
      onChange(country);
    },
    [onChange],
  );

  return (
    <Popover modal>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn("rounded-e-none rounded-s-md pl-2 pr-3 flex gap-1")}
          disabled={disabled}
        >
          <CaretSortIcon className={`h-4 w-4 text-muted-foreground ${disabled ? "hidden" : ""}`} />
          <span className="flex items-center truncate">
            <div className="bg-foreground/20 rounded-sm flex w-6 h-4">
              {value && <FlagComponent country={value} countryName={value} />}
            </div>
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandEmpty>No country found.</CommandEmpty>
          <ScrollArea
            type="always"
            className="h-56 w-72" 
          >
            <CommandGroup className="mr-1.5">
              {options
                .filter((x) => x.value)
                .map((option) => (
                  <CommandItem
                    className={"text-sm gap-2"}
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <FlagComponent
                      country={option.value}
                      countryName={option.label}
                    />
                    <span>{option.label}</span>
                    <span className="text-foreground/50">
                      {`+${RPNInput.getCountryCallingCode(option.value)}`}
                    </span>
                    <CheckIcon
                      className={`ml-auto h-4 w-4 ${
                        option.value === value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span
      className={"inline object-contain w-6 h-4 overflow-hidden rounded-sm"}
    >
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput, PhoneInputSimple };
