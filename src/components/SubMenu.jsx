import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const SubMenu = ({ menu: { title, items, icon } }) => {
  const [isOpen] = useState(true);
  const location = useLocation();

  return (
    <div>
      <div>
        <div className="flex flex-row items-center h-10  rounded-lg text-white hover:text-white cursor-pointer px-3">
          <span className="flex items-center justify-center text-lg">
            {icon}
          </span>
          <span className="ml-3 pointer-events-none select-none">{title}</span>
        </div>
      </div>
      {isOpen && (
        <div className="focus:outline-none">
          <ul className="flex flex-col w-full ml-5 pl-4" key="1">
            {items.map((item, index) => (
              <li
                className="my-px flex flex-row items-center h-10 px-3 rounded-lg text-white select-none"
                key={index}
              >
                <div>
                  <Link
                    className={
                      (location.pathname === item.target || "") &&
                      "text-yellow-300 font-bold"
                    }
                    to={item.target}
                  >
                    {item.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubMenu;
