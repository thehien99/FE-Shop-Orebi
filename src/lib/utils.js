import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

//coder
export const formatPrice = (number) => {
  return Number(number).toLocaleString('vi-VN');
}