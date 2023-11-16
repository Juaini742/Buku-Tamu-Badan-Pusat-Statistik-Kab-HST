/* eslint-disable react/prop-types */
import { useState } from "react";
import { navitems } from "./db";
import { useEffect } from "react";

function SideBar2(props) {
  const { isVisible } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(navitems);
  }, []);

  const currentPath = window.location.pathname;
  return (
    <nav
      className={`w-[250px] bg-primary h-screen fixed top-16 transition-all duration-500 ${
        isVisible ? "translate-x-0" : "-translate-x-72"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="p-5">
          <h1 className="text-sm font-bold text-white">
            Kantor Badan Pusat Statistik
          </h1>
        </div>
        <div className="p-3">
          <ul className="text-white font-semibold">
            {items.map((item) => (
              <li
                key={item.id}
                className={`list-items ${
                  currentPath === item.path ? "active" : ""
                }`}
              >
                <span className="">{item.icon}</span>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <button className="bg-sky-600 text-white py-2 px-10 rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default SideBar2;
