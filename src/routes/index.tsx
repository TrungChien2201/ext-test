import MainLayout from "@/layouts/mainLayout";
import HomePage from "@/pages/home";
import { FC, ReactElement, ReactNode } from "react";

interface IRoute {
  path: string;
  component: () => ReactElement;
  layout: ReactNode | FC;
}
const routes: Array<IRoute> = [
  { path: "/", component: HomePage, layout: MainLayout },
];

export { routes };
