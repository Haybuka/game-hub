import { useState } from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/gameGrid/gameGrid";
import GenreList from "./components/genre/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/platformSelector/platformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreSelect = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handlePlatformSelect = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX="5px">
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={handleGenreSelect}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={handlePlatformSelect}
          />
          <GameGrid
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
