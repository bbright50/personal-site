import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SidePane from "./SidePane";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="md:h-screen md:sticky md:top-0 md:w-[480px]">
          <SidePane />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
