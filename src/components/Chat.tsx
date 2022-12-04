import { Box } from "@mui/material";
import React from "react";

type Props = {
  texts: string[];
};

function Chat({ texts }: Props) {
  return (
    <>
      {texts.map((text, index) => (
        <Box
          key={index}
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            margin: "64px 32px",
          }}
        >
          <img src="/icon.png" width="32px" height="32px" />
          <div>{text}</div>
        </Box>
      ))}
    </>
  );
}

export default Chat;
