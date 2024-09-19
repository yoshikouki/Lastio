import { AnimatedLink } from "@/components/animated-link";
import { NavIconButton } from "@/components/ui/nav-icon-button";
import { url } from "@/lib/url";
import { LogoIcon } from "./logo";

export const AppHeader = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between">
      <div className="flex w-full max-w-xl items-center justify-between p-2">
        <AnimatedLink href={url.root}>
          <NavIconButton>
            <LogoIcon className="size-6 stroke-foreground" />
          </NavIconButton>
        </AnimatedLink>
      </div>
    </header>
  );
};
