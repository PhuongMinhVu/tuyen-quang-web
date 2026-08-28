import { Outlet } from "react-router-dom";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="w-full flex-1">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}

export default MainLayout;