import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <Outlet />
      </div>
    </>
  );
}
