import Content from "../components/Content";
import styled from "styled-components";
import { UserIcon, CogIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import Cookies from "universal-cookie";

const Component = styled.div`
  color: blue;
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
        <div className="p-4">
          <div className="flex items-center flex-row">
            <div className="flex ml-auto">
              <span className="flex flex-col ml-5 text-right">
                <span className="truncate text-white tracking-wide pt-1">
                  <span>Hello, </span>
                  <span className="font-semibold">
                    {cookies.get("firstname")}
                  </span>
                </span>
                <span className="truncate text-gray-400 text-xs leading-none mt-2">
                  Editor
                </span>
              </span>
              <Component
                as="button"
                className="flex justify-center items-center ml-4"
              >
                <UserIcon className="h-6 w-6 stroke-current text-black" />
              </Component>
              <Component
                as="button"
                className="flex justify-center items-center ml-4"
              >
                <CogIcon className="h-6 w-6 stroke-current text-black" />
              </Component>
            </div>
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
