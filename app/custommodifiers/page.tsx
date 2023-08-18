import Link from 'next/link';

export default function CustomModifiersPage() {
  return (
    <>
      <h2>Custom Modifiers</h2>
      <div>
        <p>
          Register your own custom modifiers that can be used just like built-in
          variants.
        </p>
        <ul className="mt-8">
          <li>
            <Link href="https://tailwindcss.com/docs/plugins#static-variants">
              Static Variants
            </Link>
          </li>
          <li>
            <Link href="https://tailwindcss.com/docs/plugins#parent-and-sibling-states">
              Parent and Sibling States
            </Link>
          </li>
          <li>
            <code>hocusv</code> example in the{' '}
            <Link href="https://github.com/ndstephens/tailwind-tips/blob/main/tailwind.config.ts">
              tailwind.config.js
            </Link>{' '}
            file of this project
          </li>
        </ul>
      </div>
    </>
  );
}
