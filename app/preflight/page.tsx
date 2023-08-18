import Link from 'next/link';

export default function PreflightPage() {
  return (
    <>
      <h2>Preflight</h2>
      <p>An opinionated set of base styles for Tailwind projects.</p>
      <ul className="mt-8">
        <li>
          <Link href="https://tailwindcss.com/docs/preflight">
            Preflight docs
          </Link>
        </li>
        <li>
          <Link href="https://github.com/tailwindlabs/tailwindcss/blob/master/src/css/preflight.css">
            Code on GitHub
          </Link>
        </li>
        <li>
          <Link href="https://www.natestephens.dev/unstyled-lists-role-attribute#if-using-tailwind-css">
            A note
          </Link>{' '}
          about the <code>role</code> attribute.
        </li>
      </ul>
    </>
  );
}
