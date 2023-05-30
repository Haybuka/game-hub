import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/gameGrid/gameGrid";
import GenreList from "./components/genre/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/platformSelector/platformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/sortSelector/sortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order : string;
  searchText : string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreSelect = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handlePlatformSelect = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const handleSelectSort = (order:string) => {
    setGameQuery({...gameQuery,order})
  }

  const handleSearchInput = (searchText:string) => {
    console.log(searchText)
  setGameQuery({...gameQuery,searchText})
  }

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
          <Navbar onSearch={handleSearchInput}/>
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
          <Flex marginBottom={5} paddingX={5}>
          <Box marginRight={5}>
          <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={handlePlatformSelect}
            />
          </Box>
            <SortSelector sortOrder={gameQuery.order} onSelectSortOrder={handleSelectSort} />
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
