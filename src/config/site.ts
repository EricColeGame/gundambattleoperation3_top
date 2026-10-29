export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Gundam Battle Operation 3 Wiki",
  shortName: "GBO3 Wiki",
  logoText: "G",
  tagline: "Mobile Suit Guides, SP Skills & Tactical Combat",
  description: "Master Mobile Suit Gundam Battle Operation 3 with unit guides, SP Skills, combat strategies, beginner tips, team tactics, platform details, and official game news.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gundambattleoperation3.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gundambattleoperation3.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://bobobo-sp.ggame.jp/en/",
  heroVideoId: "hTdVcrrSK1w", // Official MOBILE SUIT GUNDAM BATTLE OPERATION 3 announcement trailer
  social: {
    youtube: "https://www.youtube.com/watch?v=hTdVcrrSK1w",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
