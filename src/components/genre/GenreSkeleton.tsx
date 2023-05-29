import React from "react";
import { Genre } from "../../hooks/useGenres";
import { HStack, Skeleton } from "@chakra-ui/react";

interface Prop {
  data: Genre[];
}
const GenreSkeleton = ({ data }: Prop) => {
  return (
    <>
      {data.map((genre) => (
        <HStack key={genre.id} marginY={2}>
          <Skeleton height="30px" width="30px" />
          <Skeleton width="50%" height="10px" />
        </HStack>
      ))}
    </>
  );
};

export default GenreSkeleton;
