import type { ReactNode } from 'react';

export type PageProps = {

  children?: ReactNode;
};

export function Page({ children }: PageProps) {
  return (
    <div>
      {children}
    </div>
  );
}
