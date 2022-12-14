import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Layout = (/* { children } */) => (
  <>
    <Header />
    <Outlet />
    {/* {children} */}
    <Footer />
  </>
);

export default Layout;
