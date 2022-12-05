import React, { ChangeEvent } from "react";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { useCallback } from "react";
import SendIcon from "@mui/icons-material/Send";

type Props = {
  text: string;
  setText: (text: string) => void;
  isLoading: boolean;
  handleClick: () => void;
};

function Input({ text, setText, isLoading, handleClick }: Props) {
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
      disabled={isLoading}
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={handleClick} edge="end" disabled={isLoading}>
            <SendIcon sx={{ color: "rgb(235, 235, 240)" }} />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}

export default Input;
