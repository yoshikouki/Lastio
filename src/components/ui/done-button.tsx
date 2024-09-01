"use client";

import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import styles from "./done-button.module.css";

export const DoneButton = ({ className }: { className?: string }) => {
  return (
    <label
      className={cn(
        "group relative flex min-h-10 min-w-10 items-center justify-center rounded-sm border-[0.5px] transition-all",
        "has-[:checked]:rounded-[50%] has-[:checked]:bg-lime-600",
        styles.label,
        className,
      )}
    >
      <input type="checkbox" className="hidden" />
      <CheckIcon
        className={cn(
          "h-4 w-4 stroke-lime-400",
          "group-has-[:checked]:stroke-[4px] group-has-[:checked]:stroke-white",
        )}
      />
      <svg
        className={cn(
          "absolute inset-0 h-full w-full stroke-lime-400 opacity-0",
          styles.radial,
        )}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Radial</title>
        <polygon points="20,20 28,28" />
        <polygon points="80,20 72,28" />
        <polygon points="15,50 22,50" />
        <polygon points="85,50 78,50" />
        <polygon points="20,80 27,73" />
        <polygon points="80,80 73,73" />
      </svg>
    </label>
  );
};
