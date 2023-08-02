import MainLayout from "@/layouts/mainLayout";
import Column from "@/pages/column";
import HomePage from "@/pages/home";
import MyRecord from "@/pages/record";
import { FC, ReactElement, ReactNode } from "react";

interface IRoute {
  path: string;
  component: () => ReactElement;
  layout: ReactNode | FC;
}

const routes: Array<IRoute> = [
  { path: "/", component: HomePage, layout: MainLayout },
  { path: "/my-record", component: MyRecord, layout: MainLayout },
  { path: "/column", component: Column, layout: MainLayout },
  { path: "*", component: () => <div>Page Not Found</div>, layout: MainLayout },
];

export { routes };
