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
      setIsAnimating(false);
      setIsCompleted(true);
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
        margin: "64px 32px",
      }}
    >
      {isUser ? <MeIcon /> : <img src="/icon.png" width="32px" height="32px" />}
      {fixedText ? (
        <div>{fixedText}</div>
      ) : (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
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
