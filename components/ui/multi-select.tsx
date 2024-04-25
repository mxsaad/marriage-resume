import { CheckIcon, CaretSortIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface MultiSelectProps {
  options: string[];
  value: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  capacity?: number;
}

export default function MultiSelect({
  options,
  value,
  onChange,
  capacity,
}: MultiSelectProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-start h-fit gap-2 font-normal hover:bg-background"
        >
          <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
          <span className="flex flex-wrap-reverse gap-1 text-muted-foreground">
            {value.length
              ? value.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="hover:bg-destructive hover:text-destructive-foreground space-x-2"
                    onClick={(e) => {
                      onChange(value.filter((t) => tag !== t));
                      e.stopPropagation(); // HACK: Stop outer button event
                    }}
                  >
                    <span>{tag}</span>
                    <Cross2Icon className="w-3 h-3" />
                  </Badge>
                ))
              : "Please select"}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandEmpty>No results found.</CommandEmpty>
          <ScrollArea
            type="always"
            className="[&>[data-radix-scroll-area-viewport]]:max-h-56 w-[--radix-popover-trigger-width]"
          >
            <CommandGroup className="mr-1.5">
              {options.map((option, index) => (
                <CommandItem
                  key={index}
                  value={option}
                  onSelect={() => {
                    if (value.includes(option))
                      onChange(value.filter((tag) => tag !== option));
                    else if (value.length < (capacity ?? Infinity))
                      onChange([...value, option]);
                  }}
                >
                  {option}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value.includes(option) ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
