import React, { useState } from "react";
import {
  Box,
  Button,
  Slider,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
} from "@mui/material";
import History from "./History";

type GameResult = {
  time: string;
  guess: string;
  result: number;
  won: boolean;
};

const Game: React.FC = () => {
  const [threshold, setThreshold] = useState<number>(50);
  const [direction, setDirection] = useState<"under" | "over">("under");
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<GameResult[]>([]);
  const [won, setWon] = useState<boolean | null>(null);

  const handlePlay = () => {
    const roll = Math.floor(Math.random() * 100) + 1;
    const isWin = direction === "under" ? roll < threshold : roll > threshold;
    const now = new Date().toLocaleTimeString();

    const newEntry: GameResult = {
      time: now,
      guess: `${direction === "under" ? "Under" : "Over"} ${threshold}`,
      result: roll,
      won: isWin,
    };

    const updatedHistory = [newEntry, ...history].slice(0, 10);
    setHistory(updatedHistory);
    setResult(roll);
    setWon(isWin);
  };

  return (
    <Box textAlign="center" bgcolor={"white"} mt={4}>
      {result !== null && (
        <Alert severity={won ? "success" : "error"}>
          {won ? "You won!" : "You lost"} — Number was {result}
        </Alert>
      )}
      <Box my={3}>
        <Typography variant="h3">{result ?? "🎲"}</Typography>
      </Box>

      <RadioGroup
        row
        value={direction}
        sx={{ justifyContent: "center" }}
        onChange={(e) => setDirection(e.target.value as "under" | "over")}
      >
        <FormControlLabel value="under" control={<Radio />} label="Under" />
        <FormControlLabel value="over" control={<Radio />} label="Over" />
      </RadioGroup>

      <Box px={4} mt={2}>
        <Slider
          value={threshold}
          onChange={(_, value) => setThreshold(value as number)}
          min={1}
          max={99}
          valueLabelDisplay="on"
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handlePlay}
        sx={{ mt: 3 }}
        fullWidth
      >
        PLAY
      </Button>

      <History history={history} />
    </Box>
  );
};

export default Game;
