import axios from 'axios'

// main user data
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

// user activity data
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

// user average sessions data
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

// user performance data
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

