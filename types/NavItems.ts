import { ReactElement } from "react";

export interface NavItem {
  name: string;
  href: string;
  icon: ReactElement;
  isActive: boolean;
  position: string;
}
