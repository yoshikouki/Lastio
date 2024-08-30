import { url } from "@/lib/url";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-xl items-center justify-between p-4">
        <Link
          href={url.root}
          className="flex items-center justify-center gap-2"
        >
          <img
            src={"/logo-no-padding.webp"}
            loading="eager"
            alt="service logo"
            width={32}
          />
          <h1 className="font-black text-6xl">yskk</h1>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};
