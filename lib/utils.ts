import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function atleast18() {
  const today = new Date();
  return new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate(),
  ).toISOString().split("T")[0];
}
