import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router";

const NestedNavigation = ({ navItems }) => {
  const navigate = useNavigate();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(
      navItems.label,
      navItems.value,
      <EnvironmentOutlined />,
      navItems?.subnav?.map((item, index) => {
        return getItem(item.label, item.value);
      })
    ),
  ];

  const handleNavigation = (e) => {
    navigate(`/${e.key}`);
  };
  return (
    <Menu
      onClick={handleNavigation}
      style={{
        width: 256,
      }}
      mode="vertical"
      items={items}
    />
  );
};
export default NestedNavigation;
