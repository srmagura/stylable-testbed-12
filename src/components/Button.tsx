import { PropsWithChildren, ReactElement } from 'react';

import { classes, st } from './Button.st.css';

type ButtonProps = PropsWithChildren<{
  active?: boolean;
  variant: "primary" | "secondary";
}>;

export function Button({
  active = false,
  variant,
  children,
}: ButtonProps): ReactElement {
  return (
    <button className={st(classes.root, { active, variant })}>
      {children}
    </button>
  );
}
