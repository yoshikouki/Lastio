"use client";

import { CheckIcon } from "lucide-react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export const DoneButton = () => {
  const radialAnimationRef = useRef<Animation>(null);

  const onClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("done");
    radialAnimationRef.current?.play();
  };

  return (
    <button
      type="button"
      className={cn(
        "relative flex h-10 w-10 items-center justify-center",
        "rounded-sm border-[0.5px]",
      )}
      onClick={onClick}
    >
      <CheckIcon className="h-4 w-4 stroke-lime-400" />
      <svg
        className={cn(
          "h-full w-full stroke-lime-400",
          "absolute inset-0 opacity-0",
        )}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        ref={(svg: SVGSVGElement) => {
          const animation = svg.animate(
            [
              { opacity: "0", scale: "0", strokeWidth: "1" },
              { opacity: "1", scale: "1", strokeWidth: "2", offset: 0.3 },
              { opacity: "0", scale: "2", strokeWidth: "0" },
            ],
            {
              duration: 1000,
              easing: "ease-in-out",
              // iterations: Number.POSITIVE_INFINITY,
            },
          );
          animation.pause();
          radialAnimationRef.current = animation;
          return () => animation.cancel();
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Radial</title>
        <polygon points="10,10 20,20" />
        <polygon points="10,50 20,50" />
        <polygon points="20,80 30,70" />
        <polygon points="90,10 80,20" />
        <polygon points="90,50 80,50" />
        <polygon points="80,80 70,70" />
      </svg>
    </button>
  );
};
