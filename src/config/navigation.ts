import {
  BookOpen,
  Crosshair,
  Lightbulb,
  Monitor,
  Swords,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Crosshair, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "modes", path: "/modes", icon: Swords, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "tips", path: "/tips", icon: Lightbulb, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
