import ConfigPanel from "../components/ConfigPanel";
import Content from "../components/Content";
import Cookies from "universal-cookie";
import Footer from "../components/Footer";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import UserPanel from "../components/UserPanel";
import hbologo from "../img/HBO-emblema.jpg";
import styled from "styled-components";

const Component = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #fff;
`;

const Menu = () => {
  const cookies = new Cookies();

  return (
    <div className="min-h-screen bg-black text-gray-400">
      <div className="flex flex-col flex-grow">
        <div className="p-4 relative">
          <div className="flex items-center flex-row">
            <div className="flex ml-auto">
              <span className="flex flex-col ml-5 text-right">
                <span className="text-white pt-3">
                  <SearchIcon className="h-6 w-6 text-yellow-50 invisible sm:visible md:visible cursor-pointer" />
                </span>
              </span>

              <span className="flex flex-col ml-5 text-right">
                <span className="truncate text-white tracking-wide pt-1">
                  <span>Hello, </span>
                  <span className="font-semibold">
                    {cookies.get("firstname") || "admin"}
                  </span>
                </span>
                <span className="truncate text-gray-400 text-xs leading-none mt-2">
                  Editor
                </span>
              </span>
              <Component className="flex justify-center items-center ml-4">
                <UserPanel />
              </Component>
              <Component className="flex justify-center items-center ml-4">
                <ConfigPanel />
              </Component>
            </div>
          </div>
          <div className="absolute top-4 left-16 cursor-pointer">
            <a href="/home">
              <img
                src={hbologo}
                alt="logo HBO"
                className="h-16 md:h-16 lg:h-20 invisible xs:visible sm:visible md:visible"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-grow p-4">
          <div
            className="flex flex-col flex-grow rounded mt-4"
            style={{ backgroundColor: "#0a0c0f" }}
          >
            <div className="p-5">
              <Content />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
