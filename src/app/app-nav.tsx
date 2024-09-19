import { NavIconButton } from "@/components/ui/nav-icon-button";
import { HomeIcon, SettingsIcon } from "lucide-react";

export const AppNav = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between p-2">
      <div className="flex gap-2">
        <NavIconButton>
          <HomeIcon className="size-6 stroke-foreground" />
        </NavIconButton>
      </div>
      <NavIconButton>
        <SettingsIcon className="size-6 stroke-foreground" strokeWidth={1.5} />
      </NavIconButton>
    </nav>
  );
};
