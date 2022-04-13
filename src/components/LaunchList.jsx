import { Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import * as API from "../services/launches";
import { LaunchItem } from "./LaunchItem";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.error);
  }, []);

  return (
    <>
      <Heading align="center" as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <section>
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </section>
      )}
    </>
  );
}
