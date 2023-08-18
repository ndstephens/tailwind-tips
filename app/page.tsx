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
      <li>
        <Link href="/newfeatures">New Features</Link>
      </li>
      <li>
        <Link href="https://www.natestephens.dev/dynamic-class-names-in-tailwind">
          Dynamic Class Names
        </Link>
      </li>
      <li>
        <Link href="https://www.natestephens.dev/create-your-own-custom-classes">
          Create Custom Classes
        </Link>
      </li>
      <li>
        <Link href="https://www.natestephens.dev/access-theme-in-arbitrary-values">
          Access the Theme in Arbitrary Values
        </Link>
      </li>
      <li>
        <Link href="https://www.natestephens.dev/whitespace-in-arbitrary-values">
          Whitespace in Arbitrary Values
        </Link>
      </li>
      <li>
        <Link href="https://www.natestephens.dev/child-selector-as-arbitrary-modifier">
          Child Selectors
        </Link>
      </li>
      <li>
        <Link href="https://www.natestephens.dev/adding-more-aria-modifiers-to-theme">
          Add More ARIA Modifiers
        </Link>
      </li>
      <li>
        <Link href="/custommodifiers">Custom Modifiers</Link>
      </li>
      <li>
        <Link href="https://tailwindcss.com/docs/customizing-colors#aliasing-color-names">
          Aliasing Color Names
        </Link>
      </li>
      <li>
        <Link href="/usingcssvariables">Using CSS Variables with Opacity</Link>
      </li>
    </ol>
  );
}
