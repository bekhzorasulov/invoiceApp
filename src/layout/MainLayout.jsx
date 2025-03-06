import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function MainLayout({ children }) {
  return (
    <>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
