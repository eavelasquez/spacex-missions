import { Box, Button, Flex, Spacer, Tag, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as API from "../services/rockets";

export function RocketDetails() {
  const { rocketId } = useParams();
  const [rocket, setRocket] = useState(null);

  useEffect(() => {
    API.getRocketByID(rocketId).then(setRocket).catch(console.error);
  }, [rocketId]);

  return (
    <>
      <Box bg="gray.100" p={4} m={4} borderRadius="lg">
        {!rocket ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Flex>
              <Text fontSize="2xl">
                Rocket <strong>{rocket.rocket_name}</strong> (
                {rocket.rocket_type})
              </Text>
              <Spacer />
              <Tag
                p={2}
                size="lg"
                colorScheme={rocket.active ? "green" : "red"}
              >
                {rocket.active ? "Active" : "Inactive"}
              </Tag>
            </Flex>

            <Flex>
              <Text>
                <strong>First flight:</strong> {rocket.first_flight}
              </Text>
            </Flex>

            <Flex>
              <Text>
                <strong>Cost per launch:</strong> {rocket.cost_per_launch}
              </Text>
            </Flex>

            <Flex>
              <Text>
                <strong>Successful landings:</strong>{" "}
                {rocket.successful_landings}
              </Text>
            </Flex>

            <Flex>
              <Text>
                <strong>Company:</strong> {rocket.company}
              </Text>
            </Flex>

            <Flex>
              <Text>
                <strong>Country:</strong> {rocket.country}
              </Text>
            </Flex>

            <Flex>
              <Text>
                <strong>Description:</strong> {rocket.description}
              </Text>
            </Flex>
          </>
        )}
        <Link to="/">
          <Button mt={4} colorScheme="red">
            Back to Launch List
          </Button>
        </Link>
      </Box>
    </>
  );
}
