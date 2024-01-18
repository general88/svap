import React from "react";

import { commands, headquaters, optionsCommand } from "../utils/unitsSelect";
import { Card, Menu } from "antd";
import Meta from "antd/es/card/Meta";
import { NavLink, useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";

const items2 = [...commands].map((name, index) => {
  const key = String(index + 1);
  return {
    label: name.label,
    children: name.subnav.map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: _.label,
        value: _.value,
      };
    }),
  };
});

const Command = () => {
  const navigate = useNavigate();
  return (
    <section className="flex mb-10">
      <div>
        <Sider
          width={200}
          style={
            {
              // background: colorBgContainer,
            }
          }
        >
          <Menu
            mode="inline"
            onClick={(e) =>
              navigate(
                `/${e.domEvent.target.innerText
                  .split(" ")
                  .join("")
                  .replace(/&/, "-")}`
              )
            }
            items={items2}
          />
        </Sider>
      </div>
      <div className="px-10">
        <h1 className="max-w-4xl mx-auto mt-10 uppercase">
          Command Headquaters{" "}
        </h1>
        <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
          {optionsCommand.map((item) => {
            return (
              <NavLink key={item.label} to={`/${item.value}`}>
                <Card
                  hoverable
                  cover={<img alt="example" src="/public/document.png" />}
                  actions={[]}
                >
                  <Meta
                    title={item.label}
                    description={
                      <div>
                        <p>HQ</p>
                      </div>
                    }
                  />
                </Card>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Command;
