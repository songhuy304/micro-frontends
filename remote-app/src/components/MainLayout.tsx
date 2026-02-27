import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  AppHeader,
  Layout,
  SideBar,
  type MenuProps,
} from "shared_app/components";
import { HomeOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Home",
    icon: <HomeOutlined />,
  },
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar collapsed={collapsed} items={items} />
      <Layout>
        <AppHeader collapsed={collapsed} onToggle={handleToggle} />
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export { MainLayout };
