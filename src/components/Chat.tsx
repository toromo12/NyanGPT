import React from "react";

type Props = {
  texts: string[];
};

function Chat({ texts }: Props) {
  return (
    <>
      {texts.map((text, index) => (
        <div key={index} style={{ display: "flex", gap: "16px" }}>
          <div>ICON</div>
          <div>{text}</div>
        </div>
      ))}
    </>
  );
}

export default Chat;
