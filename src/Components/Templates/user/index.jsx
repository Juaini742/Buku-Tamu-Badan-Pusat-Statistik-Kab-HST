/* eslint-disable react/prop-types */
import SideBar2 from "../../Organisms/user/SideBar2";
import Header from "../../Organisms/user/Header";
import Footer from "../../Organisms/user/Footer";
import { useState } from "react";

function UserTemplate(props) {
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
          <SideBar2 isVisible={isSidebarVisible} />
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

export default UserTemplate;
