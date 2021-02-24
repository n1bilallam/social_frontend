import { Avatar } from "@material-ui/core";
import React from "react";
import "./style.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebareChat__info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
