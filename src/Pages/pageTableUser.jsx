import { useState } from "react";
import "../App.css";
import Header from "../Component/Header";
import Sidebar from "../Sidebar";
import TableUsers from "../Component/tableUsers";

const pageTableUsers = () => {
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
      <TableUsers />
    </div>
  );
};

export default pageTableUsers;
