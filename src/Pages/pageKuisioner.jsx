import { useState } from "react";
import "../App.css";
import Header from "../Component/Header";
import Sidebar from "../Sidebar";
import Kuisioner from "../Component/kuisioner";

const pageKuisioner = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div
    className="grid-container"
    style={{
      background: "linear-gradient(to bottom, #007bff, #ffffff)",
      paddingBottom: "20px",
      borderRadius: "15px",
    }}
  >
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Kuisioner />
    </div>
    
  );
};

export default pageKuisioner;
