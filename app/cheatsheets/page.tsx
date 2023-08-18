import Link from 'next/link';

export default function CheatSheetPage() {
  return (
    <>
      <h2>Cheat Sheets</h2>
      <p>Quickly find all the class names and CSS properties.</p>
      <div className="mt-8">
        <p className="mb-2">Websites</p>
        <ul>
          <li>
            <Link href="https://tailwindcomponents.com/cheatsheet/">
              Option 1
            </Link>{' '}
            (more up to date)
          </li>
          <li>
            <Link href="https://umeshmk.github.io/Tailwindcss-cheatsheet/">
              Option 2
            </Link>{' '}
            (more visual)
          </li>
        </ul>
        <p className="mb-2 mt-6">Browser extensions:</p>
        <ul>
          <li>
            <Link href="https://chrome.google.com/webstore/detail/tailwind-cheat-sheet-exte/jmggagicdeomaenmjjlphbamdaeojcol">
              Quick reference
            </Link>
          </li>
          <li>
            <Link href="https://chrome.google.com/webstore/detail/gimli-tailwind/fojckembkmaoehhmkiomebhkcengcljl">
              Dev Tools
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
