import { Route, Routes } from "react-router-dom";

import { routes } from "@/routes";

import { IRoute } from "@/utils/interface/route";
import { ElementType } from "react";

const RootComponent = () => {
  return (
    <Routes>
      {routes.map((route: IRoute, index: number) => {
        const Page = route.component;
        const Layout = route.layout as ElementType
        return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />;
      })}
    </Routes>
  );
};

export default RootComponent;
