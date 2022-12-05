import { Box, Container } from "@mui/material";
import { useMeasure } from "react-use";
import Chat from "./components/Chat";
import Input from "./components/Input";
import { FormEvent, useState } from "react";
import { NYAAS } from "./const";
import "@fontsource/noto-sans-jp";

const BOTTOM_MARGIN = 24;

function App() {
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const [inputRef, { height: inputHeight }] = useMeasure<HTMLDivElement>();
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
      <Container
        ref={ref}
        sx={{
          fontFamily: '"Noto Sans JP"',
          marginBottom: `${inputHeight + BOTTOM_MARGIN + 12}px`,
        }}
      >
        {texts.length === 0 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              fontSize: "3rem",
            }}
          >
            <Box>NyanGPT</Box>
            <Box
              sx={{
                fontSize: "1rem",
                marginTop: "8px",
                padding: "16px",
                borderRadius: "8px",
                backgroundColor: "rgb(60, 65, 80)",
                color: "rgb(235, 235, 240)",
              }}
            >
              <div>例</div>
              <div>&nbsp;</div>
              <div>「愛とはなんですか？」</div>
              <div>「なぜ戦争はなくならないのですか？」</div>
            </Box>
          </Box>
        )}
        <Chat {...{ texts, setIsAnimating }} />
        <form onSubmit={handleSubmit}>
          <Box
            ref={inputRef}
            sx={{ position: "fixed", bottom: `${BOTTOM_MARGIN}px`, width }}
          >
            <Input {...{ text, setText, isLoading }} />
          </Box>
        </form>
      </Container>
    </>
  );
}

export default App;
