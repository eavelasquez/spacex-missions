import { Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import logo from "./assets/spacex-logo.png";
import { LaunchList } from "./components/LaunchList";
import { LaunchDetails } from "./components/LaunchDetails";
import { RocketDetails } from "./components/RocketDetails";

export function App() {
  return (
    <>
      <Image src={logo} width={300} m={4} alt="SpaceX" />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:flightNumber" element={<LaunchDetails />} />
        <Route path="rocket/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  );
}
