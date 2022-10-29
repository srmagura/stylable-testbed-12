import { PropsWithChildren, ReactElement } from 'react';

import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { classes, cssStates } from './NavLink.st.css';

type NavLinkProps = PropsWithChildren<{
  href: string;
}>;

export function NavLink({ href, children }: NavLinkProps): ReactElement {
  const { pathname } = useRouter();

  return (
    <Link
      className={classNames(
        classes.root,
        cssStates({ active: pathname === href })
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
