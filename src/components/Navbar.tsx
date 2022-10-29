import { PropsWithChildren, ReactElement } from 'react';

import Link from 'next/link';

import { classes } from './Navbar.st.css';

type NavLinkProps = PropsWithChildren<{
  href: string;
}>;

function NavLink({ href, children }: NavLinkProps): ReactElement {
  return <Link href={href}>{children}</Link>;
}

export function Navbar(): ReactElement {
  return (
    <div className={classes.self}>
      <NavLink href="/button">Buttons</NavLink>
      <NavLink href="/nesting">Nesting</NavLink>
    </div>
  );
}
