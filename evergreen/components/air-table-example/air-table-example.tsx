import type { ReactNode } from 'react';

export type AirTableExampleProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function AirTableExample({ children }: AirTableExampleProps) {
  return (
    <div>
      {children}
    </div>
  );
}
