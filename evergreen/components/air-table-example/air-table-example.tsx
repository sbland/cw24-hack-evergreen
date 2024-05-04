import type { ReactNode } from 'react';

export type AirTableExampleProps = {

  children?: ReactNode;
};

export function AirTableExample({ children }: AirTableExampleProps) {
  return (
    <div>
      {children}
    </div>
  );
}
