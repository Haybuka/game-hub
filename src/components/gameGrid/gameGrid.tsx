
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../gameCard/GameCard";



const GameGrid = () => {

  const {games,error} = useGames()
  return (
    <>
  {error && (  <Text>{error}</Text>)}
    <SimpleGrid padding={10} columns={{sm:1,md:2,lg:3,xl:5}} spacing={10}>
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </SimpleGrid>
    </>
  );
};

export default GameGrid;
