import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Drawer, Affix } from "antd";
import Sidenav from "./Sidenav";
import Header from "./Header";
import Footer from "./Footer";

const { Header: AntHeader, Content, Sider } = Layout;

function Main({ children }) {
  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  useEffect(() => {}, [pathname]);

  return (
    <Layout>
      <Header />
      <Content className="content-ant">{children}</Content>
      <Footer />
    </Layout>
  );
}

export default Main;
