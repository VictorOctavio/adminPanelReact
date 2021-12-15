import React from "react";
import "./sidebar.css";

import { LineStyle, Timeline, TrendingUp, PeopleAlt, Storefront, AttachMoneySharp, Report, MailOutline, DynamicFeed, ChatBubbleOutline, Work } from "@material-ui/icons";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <div className="sidebarList">
            <NavLink to="/" className="sidebarItem">
              <LineStyle className="sidebarIcon"/> Home
            </NavLink>

            <div className="sidebarItem">
              <Timeline className="sidebarIcon"/> Analytics
            </div>
            
            <div className="sidebarItem">
              <TrendingUp className="sidebarIcon"/> SaleS
            </div>
          </div>
        </div>
      </div>


      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <div className="sidebarList">
            <NavLink to="/users" className="sidebarItem">
              <PeopleAlt className="sidebarIcon"/> Users
            </NavLink>
   
            <NavLink to="/products" className="sidebarItem">
              <Storefront className="sidebarIcon"/> Products
            </NavLink>
      
            <div className="sidebarItem">
              <AttachMoneySharp className="sidebarIcon"/> Transactions
            </div>
            <div className="sidebarItem">
            <Report className="sidebarIcon"/> Reports
            </div>
          </div>
        </div>
      </div>


      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <div className="sidebarList">
            <div className="sidebarItem">
              <MailOutline className="sidebarIcon"/> Mail
            </div>
            <div className="sidebarItem">
              <DynamicFeed className="sidebarIcon"/> Feedback
            </div>
            <div className="sidebarItem">
              <ChatBubbleOutline className="sidebarIcon"/> Messages
            </div>
          </div>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <div className="sidebarList">
            <div className="sidebarItem">
              <Work className="sidebarIcon"/> Manege
            </div>
            <div className="sidebarItem">
              <Timeline className="sidebarIcon"/> Analytics
            </div>
            <div className="sidebarItem">
              <Report className="sidebarIcon"/> Reports
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
