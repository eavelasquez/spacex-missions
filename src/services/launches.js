const API_URL = "https://api.spacexdata.com/v3";

/**
 * @description - This function is used to get all the launches
 * @returns {Promise}
 */
export async function getAllLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * @description - This function is used to get launch by flight number
 * @param {number} flightNumber
 * @returns {Promise}
 */
export async function getLaunchByFlightNumber(flightNumber) {
  try {
    const response = await fetch(`${API_URL}/launches/${flightNumber}`);
    const data = await response.json();
    return data.error ? null : data;
  } catch (error) {
    console.error(error);
  }
}
