import Link from 'next/link';

export default function UsingCSSVarsPage() {
  return (
    <>
      <h2>Using CSS Variables with Opacity</h2>
      <p>
        Using CSS variables to manage site theming is a very efficient workflow.
        However, defining your colors as CSS variables and having them work with
        the opacity modifier syntax is tricky.
      </p>
      <ul className="mt-8">
        <li>
          <Link href="https://tailwindcss.com/docs/customizing-colors#using-css-variables">
            Using CSS Variables
          </Link>
        </li>
        <li>
          <Link href="https://www.natestephens.dev/opacity-with-css-variable-color">
            An Improved Solution
          </Link>
        </li>
      </ul>
    </>
  );
}
