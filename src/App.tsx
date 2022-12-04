import { Box, Container } from "@mui/material";
import { useMeasure } from "react-use";
import Chat from "./components/Chat";
import Input from "./components/Input";
import { FormEvent, useState } from "react";
import { NYAAS } from "./const";

function App() {
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [text, setText] = useState("愛とはなんですか？");
  const [texts, setTexts] = useState<string[]>([]);

  const withLoading = (func: () => void) => {
    setIsLoading(true);
    func();
    setIsLoading(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || isAnimating) {
      return;
    }

    withLoading(() => {
      setIsAnimating(true);
      const nya = NYAAS[Math.floor(Math.random() * NYAAS.length)];
      setTexts((prev) => [...prev, text, nya]);
      setText("");
    });
  };

  return (
    <>
      <Container ref={ref}>
        <Chat {...{ texts, setIsAnimating }} />
        <form onSubmit={handleSubmit}>
          <Box sx={{ position: "fixed", bottom: "24px", width }}>
            <Input {...{ text, setText, isLoading }} />
          </Box>
        </form>
      </Container>
    </>
  );
}

export default App;
