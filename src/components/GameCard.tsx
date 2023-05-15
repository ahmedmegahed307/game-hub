import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text, Icon } from "@chakra-ui/react";
import GamePlatformIconsList from "./GamePlatformIconsList";
interface GameProps {
  game: Game;
}
const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <GamePlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
