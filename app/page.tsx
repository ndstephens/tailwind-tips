import Link from 'next/link';

export default function Home() {
  return (
    <ol>
      <li>
        <Link href="/cheatsheets">Cheat Sheets</Link>
      </li>
      <li>
        <Link href="/preflight">Preflight</Link>
      </li>
    </ol>
  );
}
