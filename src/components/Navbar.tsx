import { ReactElement } from 'react';

import { classes } from './Navbar.st.css';
import { NavLink } from './NavLink';

export function Navbar(): ReactElement {
  return (
    <div className={classes.root}>
      <div className={classes.brand}>Stylable Testbed</div>
      <NavLink href="/">Buttons</NavLink>
      <NavLink href="/nesting">Nesting</NavLink>
    </div>
  );
}
