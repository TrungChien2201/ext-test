import { ElementType, FC, ReactElement, ReactNode } from 'react';

export interface IRoute {
  path: string;
  component: () => ReactElement;
  layout: ElementType | ReactNode | FC;
}