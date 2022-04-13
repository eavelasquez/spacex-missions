import { useState, useEffect } from "react";
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
      <h1>SpaceX Launches</h1>
      <section>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {launches.map((launch) => (
              <li key={launch.flight_number}>
                <h2>{launch.mission_name} ({launch.launch_year})</h2>
                <p>{launch.details}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
