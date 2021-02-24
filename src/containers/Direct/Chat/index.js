import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
  Send,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./style.css";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

function Chat({ messages }) {
  const [write, setWrite] = useState("");
  const sendMessage = async (e) => {
    setWrite("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen 1 hour ago.</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message`}>
          <span className="chat__name">FullName</span>
          Hello chef
          <span className="chat__timestamp">{dayjs(Date.now()).fromNow()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <form>
          <input
            style={{ color: "gray" }}
            type="text"
            placeholder="Write somthings"
            value={write}
            onChange={(e) => {
              setWrite(e.target.value);
            }}
          />

          {write ? (
            <IconButton type="submit" onClick={sendMessage}>
              <Send />
            </IconButton>
          ) : (
            <IconButton>
              <Mic />
            </IconButton>
          )}
        </form>
      </div>
    </div>
  );
}

export default Chat;
