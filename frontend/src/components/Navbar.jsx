import React from "react";
import { NavLink } from "react-router-dom";
import { topNavItems } from "../utils/data";
import { useSelector } from "react-redux";
import UserProfileDropdown from "./UserProfileDropdown";

const Navbar = () => {
  const { profile } = useSelector((state) => state.user);
  return (
    <nav
      className="shadow-md px-2 py-5 w-full"
      style={
        {
          // backgroundColor: "#013678",
        }
      }
    >
      <section className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex gap-6 items-center text-xs lg:text-lg">
          <img
            src="https://airforce.mil.ng/assets/pages/img/pia.png"
            alt=""
            className="w-10"
          />
          <h1>NIGERIAN AIR FORCE</h1>
        </div>
        <div className="space-x-5  text-sm uppercase pt-4 sm:pt-0">
          {topNavItems.map((item) => {
            return (
              <NavLink
                className="font-medium text-gray-700 hover:text-[#07B3E9] transition-all duration-300"
                key={item.title}
                to={`/${item.value}`}
              >
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
