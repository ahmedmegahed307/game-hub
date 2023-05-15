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
import GetCroppedImageUrl from "../services/image-url";
interface GameProps {
  game: Game;
}
const GameCard = ({ game }: GameProps) => {
  return (
    <Card height="300px" borderRadius={10} overflow={"hidden"}>
      <Image src={GetCroppedImageUrl(game.background_image)} />

      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
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
