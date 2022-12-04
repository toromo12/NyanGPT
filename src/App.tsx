import { Box, Container } from "@mui/material";
import { useMeasure } from "react-use";
import Chat from "./components/Chat";
import Input from "./components/Input";
import { FormEvent, useCallback, useState } from "react";

function App() {
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const [text, setText] = useState("");
  const [texts, setTexts] = useState<string[]>([]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setTexts((prev) => [...prev, text]);
      setText("");
    },
    [setTexts, setText, text]
  );

  return (
    <>
      <Container ref={ref}>
        <Chat {...{ texts }} />
        <form onSubmit={handleSubmit}>
          <Box sx={{ position: "fixed", bottom: "24px", width }}>
            <Input {...{ text, setText }} />
          </Box>
        </form>
      </Container>
    </>
  );
}

export default App;
