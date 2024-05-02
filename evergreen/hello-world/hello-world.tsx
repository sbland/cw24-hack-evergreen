import type { ReactNode } from 'react';

export type HelloWorldProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function HelloWorld({ children }: HelloWorldProps) {
  return (
    <div>
      {children}
    </div>
  );
}
