import { Box, Flex, Text, Spacer, Tag, Heading, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import logo from "./assets/spacex-logo.png";
import * as API from "./services/launches";

export function App() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.getAllLaunches()
      .then((data) => {
        setLaunches(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Image src={logo} width={300} m={4} alt="Spacex" />
      <Heading align="center" as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
              {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            {launches.map((launch) => (
              <Box
                bg="gray.100"
                p={4}
                m={4}
                borderRadius="lg"
              >
                <Flex>
                  <Text fontSize="2xl">
                    Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                  </Text>
                  <Spacer />
                  <Tag p={2} size="sm" colorScheme={launch.launch_success ? "green" : "red"}>
                    {launch.launch_success ? "Success" : "Failure"}
                  </Tag>
                </Flex>
              </Box>
            ))}
          </section>
        )}
    </>
  );
}
