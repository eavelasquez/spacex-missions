import { Heading, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import * as API from "./services/launches";
import logo from "./assets/spacex-logo.png";
import { LaunchItem } from "./components/LaunchItem";

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
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </section>
      )}
    </>
  );
}
