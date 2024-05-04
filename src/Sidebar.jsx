import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const navigate = useNavigate();
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <button
            style={{ width: "100%" }}
            className="border-0 bg-light text-start"
            onClick={() => navigate("/pageDashboard")}
          >
            <BsGrid1X2Fill className="icon" /> Dashboard
          </button>
        </li>
        {/* <li className="sidebar-list-item">
          <button
            style={{ width: "100%" }}
            className="border-0 bg-light text-start"
            onClick={() => navigate("/pageLogin")}
          >
            <BsFillArchiveFill className="icon" /> Login
          </button>
        </li>
        <li className="sidebar-list-item">
          <button
            style={{ width: "100%" }}
            className="border-0 bg-light text-start"
            onClick={() => navigate("/pageRegistrasi")}
          >
            <BsFillGrid3X3GapFill className="icon" /> Registrasi
          </button>
        </li> */}
        <li className="sidebar-list-item">
          <button
            style={{ width: "100%" }}
            className="border-0 bg-light text-start"
            onClick={() => navigate("/pageTableDoctors")}
          >
            <BsPeopleFill className="icon" /> Table Doctors
          </button>
        </li>
        <li className="sidebar-list-item">
          <button
            style={{ width: "100%" }}
            className="border-0 bg-light text-start"
            onClick={() => navigate("/pageTableUsers")}
          >
            <BsPeopleFill className="icon" /> Table Users
          </button>
        </li>
        <li className="sidebar-list-item">
          <button
            style={{ width: "100%" }}
            className="border-0 bg-light text-start"
            onClick={() => navigate("/pageKuisioner")}
          >
            <BsPeopleFill className="icon" /> Input Kuisioner
          </button>
        </li>
        <li className="sidebar-list-item">
          <a href="#aaaa">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#aaaaa">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
