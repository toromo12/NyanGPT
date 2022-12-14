import { Box } from "@mui/material";
import Typewriter from "typewriter-effect";
import MeIcon from "./MeIcon";
import { useMemo, useState } from "react";

type ChatItemProps = {
  index: number;
  text: string;
  setIsAnimating: (isAnimating: boolean) => void;
};

function ChatItem({ index, text, setIsAnimating }: ChatItemProps) {
  const isUser = useMemo(() => index % 2 === 0, [index]);
  const [isCompleted, setIsCompleted] = useState(false);
  const fixedText = useMemo(() => {
    if (isUser) {
      return text;
    }
    if (isCompleted) {
      return text;
    }
    return null;
  }, [isUser, isCompleted]);

  return (
    <Box
      key={index}
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        padding: "64px 32px",
        borderRadius: "8px",
        ...(!isUser
          ? {
              backgroundColor: "rgb(70, 70, 80)",
            }
          : {}),
      }}
    >
      {isUser ? <MeIcon /> : <img src="/icon.png" width="32px" height="32px" />}
      {fixedText ? (
        <div>{fixedText}</div>
      ) : (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000 + Math.random() * 3000)
              .typeString(text)
              .callFunction(() => {
                setIsAnimating(false);
                setIsCompleted(true);
              })
              .start();
          }}
          options={{
            autoStart: true,
            cursor: "■",
          }}
        />
      )}
    </Box>
  );
}

type Props = {
  texts: string[];
  setIsAnimating: (isAnimating: boolean) => void;
};

function Chat({ texts, setIsAnimating }: Props) {
  return (
    <>
      {texts.map((text, index) => (
        <ChatItem key={index} {...{ index, text, setIsAnimating }} />
      ))}
    </>
  );
}

export default Chat;
