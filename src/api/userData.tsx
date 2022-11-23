import axios from 'axios'

//import { TUserData } from 'types/dataUser.types'

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
