import React from "react";
import { Dropdown, Button, theme, Divider, Space } from "antd";
import {
  UserOutlined,
  UserSwitchOutlined,
  FilePdfOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/features/user/userSlice";

const { useToken } = theme;
const UserProfileDropdown = () => {
  const { profile } = useSelector((state) => state.user);
  const isBigScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // sign out user func
  const signOutUser = () => {
    dispatch(logoutUser(null));
    navigate("/sign-in");
  };

  const items = [
    {
      key: "1",
      label: <Link to={"/admin"}>Admin dashboard</Link>,
      icon: (
        <UserSwitchOutlined
          style={{
            fontSize: "1rem",
          }}
        />
      ),
    },

    {
      key: "2",
      label: <Link to={"/upload"}>Upload file</Link>,
      icon: (
        <FilePdfOutlined
          style={{
            fontSize: "1rem",
          }}
        />
      ),
    },
  ].map((item, index) => {
    // this is for hiding the admin dashboard nav tab from users that do not have admin privileges
    if (profile?.role === "user" && index === 0) {
      item = undefined;
    }
    if (profile?.role !== "admin" && !profile.radioRoomEmail) {
      item = undefined;
    }

    return item;
  });

  const { token } = useToken();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle = {
    boxShadow: "none",
  };

  return (
    <>
      <Dropdown
        menu={{ items }}
        placement="bottomRight"
        trigger={[isBigScreen ? "hover" : "click"]}
        arrow
        dropdownRender={(menu) => (
          <div style={contentStyle}>
            {React.cloneElement(menu, {
              style: menuStyle,
            })}
            <Divider style={{ margin: 0 }} />
            <Space style={{ padding: 8 }}>
              <Button
                icon={<LogoutOutlined />}
                type="primary"
                block
                onClick={signOutUser}
              >
                Sign Out
              </Button>
            </Space>
          </div>
        )}
      >
        <Button
          onClick={(e) => e.preventDefault()}
          type="text"
          icon={
            <UserOutlined
              style={{
                fontSize: "1.5rem",
              }}
            />
          }
        >
          {profile?.radioRoomEmail || profile?.nafNum}
        </Button>
      </Dropdown>
    </>
  );
};

export default UserProfileDropdown;
