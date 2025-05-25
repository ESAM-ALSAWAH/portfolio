import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function playClickAudio() {
  const audio = new Audio("/sounds/click-affect.wav");
  audio.onloadeddata = () => {
    audio.play();
  };
}
