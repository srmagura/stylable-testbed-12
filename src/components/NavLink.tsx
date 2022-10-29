import { PropsWithChildren, ReactElement } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { classes, st } from './NavLink.st.css';

type NavLinkProps = PropsWithChildren<{
  href: string;
}>;

export function NavLink({ href, children }: NavLinkProps): ReactElement {
  const { pathname } = useRouter();

  return (
    <Link
      className={st(classes.root, { active: pathname === href })}
      href={href}
    >
      {children}
    </Link>
  );
}
