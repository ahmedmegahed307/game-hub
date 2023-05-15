import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card height="300px" borderRadius={10} overflow={"hidden"}>
      <Skeleton>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
