import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import DesktopHeader from "../components/header/DesktopHeader";
import DesktopFooter from "../components/footer/DesktopFooter";

import './index.css'

export const Route = createRootRoute({
  component: () => (
    <div className="layout-container">
      <DesktopHeader />
      <main className="content">
        <Outlet />
      </main>
      <DesktopFooter />
      <TanStackRouterDevtools />
    </div>
  ),
});
