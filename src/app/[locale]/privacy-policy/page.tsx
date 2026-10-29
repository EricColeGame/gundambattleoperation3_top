import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Gundam Battle Operation 3 Wiki provides informational game guides for MOBILE SUIT GUNDAM BATTLE OPERATION 3 at gundambattleoperation3.top. We do not request PlayStation Network, Steam, Bandai Namco, or other account credentials, passwords, or private payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to the official game website, PlayStation Store, Steam, YouTube, Discord, X, or community tools. Those services are governed by their own privacy policies.</p>
      <p>Questions about this policy can be sent to <a className="font-medium text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
