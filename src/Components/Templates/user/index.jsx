/* eslint-disable react/prop-types */
import SideBar2 from "./SideBar2";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function UserTemplate(props) {
  const { children } = props;
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="flex flex-col relative overflow-hidden">
        <Header onToggleSidebar={toggleSidebar} />
        <div className="flex">
          <SideBar2 isVisible={isSidebarVisible} />
          <div
            className={`trans-500 mb-28 mt-[70px] flex-1 ${
              isSidebarVisible ? "ml-[250px]" : "ml-0"
            }`}
          >
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default UserTemplate;
