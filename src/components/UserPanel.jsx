import { React, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import styled from "styled-components";
import { UserIcon } from "@heroicons/react/outline";
import Cookies from "universal-cookie/es6";
import { useHistory } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Component = styled.div`\
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #fff;
`;

const UserPanel = () => {
  const cookies = new Cookies();
  const history = useHistory();
  const path = `home`;
  const redirect = () => {
    history.replace(
      `/home/account/${cookies.get("id")}`,
      `${path}/account/${cookies.get("id")}`
    );
  };

  const logout = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("firstname", { path: "/" });
    cookies.remove("lastname", { path: "/" });
    cookies.remove("username", { path: "/" });
    cookies.remove("password", { path: "/" });
    history.push("/");
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button>
              <Component className="flex justify-center items-center">
                <UserIcon className="h-6 w-6 stroke-current text-black" />
              </Component>
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-75"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30"
            >
              <div className="py-1">
                <Menu.Item onClick={redirect}>
                  {({ active }) => (
                    <span
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Account information
                    </span>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <span
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Appearance
                    </span>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <span
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Change avatar
                    </span>
                  )}
                </Menu.Item>
                <Menu.Item onClick={logout}>
                  {({ active }) => (
                    <span
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Log out
                    </span>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default UserPanel;
