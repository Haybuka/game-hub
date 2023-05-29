import { useState } from "react";
import { Button, ButtonGroup, Grid, GridItem,Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/gameGrid/gameGrid";
import GenreList from "./components/genre/GenreList";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" >
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main" >
         <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
