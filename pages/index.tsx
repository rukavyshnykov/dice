import Head from "next/head";
import { Container } from "@mui/material";
import Game from "../components/Game";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dice</title>
      </Head>
      <Container maxWidth="sm">
        <Game />
      </Container>
    </>
  );
}
