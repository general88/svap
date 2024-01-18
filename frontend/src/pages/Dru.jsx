import React from "react";

import { druUnits } from "../utils/unitsSelect";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { NavLink } from "react-router-dom";

const Dru = () => {
  return (
    <div>
      <h1 className="max-w-6xl mx-auto mt-10 uppercase">Direct Report Units</h1>
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  gap-4">
        {druUnits.map((item) => {
          return (
            <NavLink key={item.label} to={`/${item.value}`}>
              <Card
                hoverable
                cover={<img alt="example" src="./public/folder.png" />}
                actions={[]}
              >
                <Meta
                  title={item.label}
                  // description={
                  //   <div>
                  //     <p>HQ</p>
                  //   </div>
                  // }
                />
              </Card>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Dru;
