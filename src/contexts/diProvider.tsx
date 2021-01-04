import * as React from 'react';
import { Container } from 'inversify';
import { container } from 'src/di/container';

export const InversifyContext = React.createContext<{ container: Container | null }>({ container: null });

type Props = {
  children: any;
};

export const DIProvider: React.FC<Props> = (props: Props) => (
  <InversifyContext.Provider value={{ container }}>{props.children}</InversifyContext.Provider>
);
