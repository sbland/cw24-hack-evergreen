import type { ReactNode } from 'react';

export type HelloWorldProps = {

  children?: ReactNode;
};

export function HelloWorld({ children }: HelloWorldProps) {
  return (
    <div>
      {children}
    </div>
  );
}
