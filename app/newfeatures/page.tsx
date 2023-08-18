import Link from 'next/link';

export default function NewFeaturesPage() {
  return (
    <>
      <h2>New Features</h2>
      <div>
        <p>
          Tailwind does not update often, but here are several recent updates
          you may not be aware of{' '}
          <span>
            (
            <Link href="https://tailwindcss.com/blog/tailwindcss-v3-3">
              v3.3
            </Link>
            )
          </span>
        </p>
        <ul className="mt-8">
          <li>
            <Link href="https://tailwindcss.com/blog/tailwindcss-v3-3#extended-color-palette-for-darker-darks">
              Extended color palette for darker colors
            </Link>
          </li>
          <li>
            <Link href="https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties">
              Logical property updates
            </Link>
          </li>
          <li>
            <Link href="https://tailwindcss.com/blog/tailwindcss-v3-3#fine-tune-gradient-color-stop-positions">
              Fine-tune gradient stops
            </Link>
          </li>
          <li>
            <Link href="https://tailwindcss.com/blog/tailwindcss-v3-3#line-clamp-out-of-the-box">
              Line-clamp now included
            </Link>
          </li>
          <li>
            <Link href="https://tailwindcss.com/blog/tailwindcss-v3-3#new-line-height-shorthand-for-font-size-utilities">
              Line-height shorthand
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
