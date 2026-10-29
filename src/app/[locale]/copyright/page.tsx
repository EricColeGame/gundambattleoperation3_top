import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>MOBILE SUIT GUNDAM BATTLE OPERATION 3, Gundam, and related marks, logos, and media belong to their respective owners.</p>
      <p>Gundam Battle Operation 3 Wiki is an independent, non-official fan project at gundambattleoperation3.top. Game imagery and trademarks are used for identification and commentary.</p>
      <p>If you own rights to content displayed here and have a concern, contact <a className="font-medium text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
