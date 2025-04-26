import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import DesktopHeader from "../components/header/DesktopHeader";
import DesktopFooter from "../components/footer/DesktopFooter";

import "./index.css";

// This is the root route, it will be rendered at the root path
export const Route = createRootRoute({
  // This will render whenever a child is rendered
  component: () => (
    <div className="layout-container">
      <DesktopHeader />
      <main className="content">
        {/* The Outlet is where the child routes will be rendered */}
        <Outlet />
      </main>
      <DesktopFooter />
      <TanStackRouterDevtools />
    </div>
  ),
});
