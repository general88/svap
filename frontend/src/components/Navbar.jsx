import React from "react";
import { NavLink } from "react-router-dom";
import { topNavItems } from "../utils/data";
import { useSelector } from "react-redux";
import UserProfileDropdown from "./UserProfileDropdown";

const Navbar = () => {
  const { profile } = useSelector((state) => state.user);
  return (
    <nav
      className="shadow-md px-2 py-5"
      style={
        {
          // backgroundColor: "#013678",
        }
      }
    >
      <section className="max-w-6xl mx-auto  flex items-center justify-between">
        <div className="flex gap-6 items-center text-xs lg:text-lg">
          <img
            src="https://airforce.mil.ng/assets/pages/img/pia.png"
            alt=""
            className="w-10"
          />
          <h1>NIGERIAN AIR FORCE</h1>
        </div>
        <div className="space-x-5 font-black text-sm uppercase">
          {topNavItems.map((item) => {
            return (
              <NavLink key={item.title} to={`/${item.value}`}>
                {item.title}
              </NavLink>
            );
          })}

          {!profile ? (
            <NavLink to={`/sign-in`}>SIGN IN</NavLink>
          ) : (
            <UserProfileDropdown />
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
