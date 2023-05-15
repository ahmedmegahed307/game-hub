import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  Icon,
  HStack,
} from "@chakra-ui/react";
import GamePlatformIconsList from "./GamePlatformIconsList";
import CriticScore from "./CriticScore";
interface GameProps {
  game: Game;
}
const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <GamePlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
