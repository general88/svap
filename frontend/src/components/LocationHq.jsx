import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { headquaters, commands, dru } from "../utils/unitsSelect";
import NestedNavigation from "./NestedNavigation";

const LocationHq = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto m-5 shadow-xl">
      <Card
        title="HQ NAF"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <div>
          {headquaters.map((option) => (
            <NestedNavigation key={option.label} navItems={option} />
          ))}
        </div>
      </Card>
      <Card
        title="COMMAND HQ"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <div className="">
          {commands.map((option) => (
            <NestedNavigation key={option.label} navItems={option} />
          ))}
        </div>
      </Card>
      <Card
        title="DIRECT REPORTING UNITS"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <div>
          {dru.map((option) => (
            <NestedNavigation key={option.label} navItems={option} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default LocationHq;
