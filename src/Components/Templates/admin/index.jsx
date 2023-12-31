/* eslint-disable react/prop-types */
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function AdminTemplate(props) {
  const { children } = props;
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <Header onToggleSidebar={toggleSidebar} />
        <div className="flex">
          <SideBar isVisible={isSidebarVisible} />
          <div
            className={`trans-500 mt-[70px] flex-1 ${
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

export default AdminTemplate;
