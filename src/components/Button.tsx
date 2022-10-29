import { PropsWithChildren, ReactElement } from 'react';

import classNames from 'classnames';

import { classes, cssStates } from './Button.st.css';

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
    <button
      className={classNames(classes.root, cssStates({ active, variant }))}
    >
      {children}
    </button>
  );
}
