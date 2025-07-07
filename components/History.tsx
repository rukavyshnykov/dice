import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

type Props = {
  history: {
    time: string;
    guess: string;
    result: number;
    won: boolean;
  }[];
};

const History: React.FC<Props> = ({ history }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Guess</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.guess}</TableCell>
              <TableCell style={{ color: item.won ? "green" : "red" }}>
                {item.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default History;
