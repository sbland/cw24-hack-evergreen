import type { ReactNode } from 'react';

export type PageProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Page({ children }: PageProps) {
  return (
    <div>
      {children}
    </div>
  );
}
