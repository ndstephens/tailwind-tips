import Link from 'next/link';
import Image from 'next/image';

import globalVarsPic from 'public/images/global-vars.png';

export default function ConvertThemeColorsPage() {
  return (
    <>
      <h2> Convert Theme Colors to Global CSS Variables</h2>
      <p>
        Here is a utility function for converting all your theme colors to CSS
        variables. This often is not useful, but I found it necessary for easy
        color access when working with Framer Motion.
      </p>
      <ul className="my-8">
        <li>
          Here is the{' '}
          <Link href="https://github.com/ndstephens/tailwind-tips/blob/main/lib/utils/tailwindColorVars.ts">
            utility function
          </Link>{' '}
          found in this site&apos;s repo.
        </li>
        <li>
          It is called as a plugin in the{' '}
          <Link href="https://github.com/ndstephens/tailwind-tips/blob/main/tailwind.config.ts">
            tailwind.config.ts
          </Link>{' '}
          file
        </li>
      </ul>
      <p>
        If you check out your <code>:root</code> styles using the browser dev
        tools you will see all your theme colors as CSS variables.
      </p>
      <div className="mt-16 max-w-xl">
        <Image
          src={globalVarsPic}
          alt="screen shot of styles in browser dev tools"
        />
      </div>
    </>
  );
}
