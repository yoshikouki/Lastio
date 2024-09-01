"use client";

import { CheckIcon } from "lucide-react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

const animateButton = (label: HTMLLabelElement) => {
  const buttonAnimation = label.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.8)", offset: 0.3 },
      { transform: "scale(1.1)", offset: 0.6 },
      { transform: "scale(1)" },
    ],
    { duration: 300, easing: "ease-in-out", fill: "none" },
  );
  buttonAnimation.pause();
  return buttonAnimation;
};

const animateIcon = (svg: SVGSVGElement) => {
  const iconAnimation = svg.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.5)", offset: 0.3 },
      { transform: "scale(1)" },
    ],
    { duration: 300, easing: "ease-in-out", fill: "none" },
  );
  iconAnimation.pause();
  return iconAnimation;
};

const animateRadical = (svg: SVGSVGElement) => {
  const radialAnimation = svg.animate(
    [
      { opacity: 0, transform: "scale(0.8)", strokeWidth: "1px" },
      { opacity: 1, transform: "scale(1.7)", strokeWidth: "4px", offset: 0.3 },
      { opacity: 0, transform: "scale(2)", strokeWidth: "0px", stroke: "#fff" },
    ],
    { duration: 1000, easing: "ease-in-out", fill: "forwards" },
  );
  radialAnimation.pause();
  return radialAnimation;
};

export const DoneButton = ({ className }: { className?: string }) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const buttonAnimationRef = useRef<Animation | null>(null);
  const iconAnimationRef = useRef<Animation | null>(null);
  const radialAnimationRef = useRef<Animation | null>(null);

  const animate = () => {
    if (!checkboxRef.current?.checked) return;
    buttonAnimationRef.current?.play();
    iconAnimationRef.current?.play();
    radialAnimationRef.current?.play();
  };

  const onChange = (_e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("done");
    animate();
  };

  return (
    <label
      className={cn(
        "group relative flex min-h-10 min-w-10 items-center justify-center rounded-sm border-[0.5px] transition-all duration-300",
        "has-[:checked]:rounded-[50%] has-[:checked]:bg-lime-600",
        className,
      )}
      ref={(label: HTMLLabelElement) => {
        if (!label) return () => {};
        buttonAnimationRef.current = animateButton(label);
        return () => buttonAnimationRef.current?.cancel();
      }}
    >
      <input
        type="checkbox"
        onChange={onChange}
        className={cn("hidden")}
        ref={checkboxRef}
      />
      <CheckIcon
        className={cn(
          "h-4 w-4",
          "stroke-lime-400 group-has-[:checked]:stroke-[4px] group-has-[:checked]:stroke-white",
        )}
        ref={(svg: SVGSVGElement) => {
          if (!svg) return () => {};
          iconAnimationRef.current = animateIcon(svg);
          return () => iconAnimationRef.current?.cancel();
        }}
      />
      <svg
        className={cn(
          "h-full w-full stroke-lime-400",
          "absolute inset-0 opacity-0",
        )}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        ref={(svg: SVGSVGElement) => {
          if (!svg) return () => {};
          radialAnimationRef.current = animateRadical(svg);
          return () => radialAnimationRef.current?.cancel();
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Radial</title>
        <polygon points="13,13 20,20" />
        <polygon points="10,50 20,50" />
        <polygon points="87,13 80,20" />
        <polygon points="90,50 80,50" />
        <polygon points="20,80 27,73" />
        <polygon points="80,80 73,73" />
      </svg>
    </label>
  );
};
