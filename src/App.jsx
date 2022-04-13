import { Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import logo from "./assets/spacex-logo.png";
import { LaunchList } from "./components/LaunchList";

export function App() {
  return (
    <>
      <Image src={logo} width={300} m={4} alt="SpaceX" />
      <Routes>
        <Route path="/" element={<LaunchList />} />
      </Routes>
    </>
  );
}
