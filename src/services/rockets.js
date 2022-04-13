import { API_URL } from ".";

/**
 * @description - This function is used to get one launch by ID
 * @param {number} rocketId
 * @returns {Promise}
 */
export async function getRocketByID(rockerId) {
  try {
    const response = await fetch(`${API_URL}/rockets/${rockerId}`);
    const data = await response.json();
    return data.error ? null : data;
  } catch (error) {
    console.error(error);
  }
}
