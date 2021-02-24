import React, { useEffect, useState } from "react";
import "./style.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Layout from "../../components/Layout";

export default function Direct() {
  const [messages, setMessages] = useState([]);

  return (
    <Layout>
      <div className="direct">
        <div className="direct__body">
          {/* sidebar */}
          <Sidebar />
          {/* chatComponent */}
          <Chat messages={messages} />
        </div>
      </div>
    </Layout>
  );
}
