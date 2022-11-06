import axios from 'axios'
import { User } from 'formatters/user_formatter'
import { TUserData } from 'types/dataUser.types'

async function getUserData (id: string): Promise<TUserData> {
    let data: TUserData
    const apiData = await axios
    .get(`http://localhost:3000/user/${id}`)
    .then((response) => {
        data = response.data.data
        return data
    })
    .catch((error) => {
      throw new Error('Error:', error)
    })
    return new User(apiData)
}

export default getUserData