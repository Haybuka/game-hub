import React from "react";
import useGenres from "../../hooks/useGenres";
import { list } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
