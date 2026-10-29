import Link from "next/link";

export default function RootPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/en" />
      <p>
        Redirecting to <Link href="/en">Gundam Battle Operation 3 Wiki</Link>…
      </p>
    </main>
  );
}
