import { Badge } from "@chakra-ui/react";

interface scoreProps {
  score: number;
}
const CriticScore = ({ score }: scoreProps) => {
  let color = score > 90 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
