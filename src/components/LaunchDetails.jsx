import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Flex, Text, Spacer, Tag, Button } from "@chakra-ui/react";
import dayjs from "dayjs";

import * as API from "../services/launches";

export function LaunchDetails() {
  const { flightNumber } = useParams();
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    API.getLaunchByFlightNumber(flightNumber)
      .then(setLaunch)
      .catch(console.error);
  }, [flightNumber]);

  return (
    <>
      <Box bg="gray.100" p={4} m={4} borderRadius="lg">
        {!launch ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Flex>
              <Text fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong> (
                {launch.launch_year})
              </Text>
              <Spacer />
              <Tag
                p={2}
                size="lg"
                colorScheme={launch.launch_success ? "green" : "red"}
              >
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>

            <Flex>
              <Text>
                <strong>Rocket: </strong>
                <Link to={`/rocket/${launch.rocket?.rocket_id}`}>
                  {launch.rocket.rocket_name}
                </Link>
              </Text>
            </Flex>

            <Flex>
              <Text>
                <strong>Launch site:</strong> {launch.launch_site.site_name}
              </Text>
            </Flex>

            <Flex>
              <Text>
                <strong>Successful landing:</strong>{" "}
                {launch.launch_success &&
                launch.rocket.first_stage.cores[0].land_success
                  ? "Yes"
                  : "No"}
              </Text>
              <Spacer />
            </Flex>

            <Flex>
              <Text>
                <strong>Details:</strong> {launch.details}
              </Text>
              <Spacer />
            </Flex>

            <Flex>
              <Text>
                <strong>Links:</strong>{" "}
                <a href={launch.links.article_link}>Article</a> |{" "}
                <a href={launch.links.video_link}>Video</a>
              </Text>
              <Spacer />
            </Flex>

            <Flex>
              <Text>
                <strong>Launch date:</strong>{" "}
                {dayjs(launch.launch_date_local)
                  .locale("en")
                  .format("MMMM DD, YYYY")}
              </Text>
              <Spacer />
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
