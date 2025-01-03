import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-options">
          <NavLink to="/add" className="sidebar-option">
            <img src={assets.add_icon}  />
            <p>Add Item</p>
          </NavLink>
          <NavLink to="/list" className="sidebar-option">
            <img src={assets.order_icon} />
            <p>List items</p>
          </NavLink>
          <NavLink to="/orders" className="sidebar-option">
            <img src={assets.order_icon} />
            <p>Orders</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
