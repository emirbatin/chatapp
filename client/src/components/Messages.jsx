import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage";

const Messages = () => {
  useGetMessages();
  useGetRealTimeMessage();
  const { messages } = useSelector((store) => store.message);

  // Ensure messages is always an array
  const messageArray = Array.isArray(messages) ? messages : [];

  return (
    <div className="px-4 flex-1 overflow-auto">
      {messageArray.length > 0 ? (
        messageArray.map((message) => (
          <Message key={message._id} message={message} />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Messages;
