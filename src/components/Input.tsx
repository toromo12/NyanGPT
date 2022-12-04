import React, { ChangeEvent } from "react";
import { OutlinedInput } from "@mui/material";
import { useCallback } from "react";

type Props = {
  text: string;
  setText: (text: string) => void;
};

function Input({ text, setText }: Props) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setText(event.target.value);
    },
    []
  );
  return (
    <OutlinedInput
      fullWidth
      sx={{
        backgroundColor: "rgb(60, 65, 80)",
        color: "rgb(235, 235, 240)",
      }}
      value={text}
      onChange={handleChange}
    />
  );
}

export default Input;
