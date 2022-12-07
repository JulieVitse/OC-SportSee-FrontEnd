import axios from 'axios'

/**
 * Get user data from API
 * @async
 * @param {string} id - user id
 * @returns {Promise<object>} A promise that contains an object with the user's data when resolved
 */
export async function getUserData(id: string): Promise<any> {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3000/user/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

/** Get user activity data from API
 * @param {string} id - user id
 * @returns {Promise<object>} A promise that contains an object with the user's activity data when resolved
 */
export async function getUserActivity(id: string): Promise<any> {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3000/user/${id}/activity`)
    return data
  } catch (error) {
    console.log(error)
  }
}

/** Get user average sessions data from API
 * @param {string} id - user id
 * @returns {Promise<object>} A promise that contains an object with the user's average sessions data when resolved
 */
export async function getUserAverageSessions(id: string): Promise<any> {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3000/user/${id}/average-sessions`)
    return data
  } catch (error) {
    console.log(error)
  }
}

/** Get user performance data from API
 * @param {string} id - user id
 * @returns {Promise<object>} A promise that contains an object with the user's performance data when resolved
 */
export async function getUserPerformance(id: string): Promise<any> {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3000/user/${id}/performance`)
    return data
  } catch (error) {
    console.log(error)
  }
}
