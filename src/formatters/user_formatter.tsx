import {
  TUserData,
  TUserForHomePage,
  TUserActivity,
  TUserActivityForHomePage,
  //TSessions
} from 'types/dataUser.types'
import { userActivity } from '_mocks_/store'

export async function formatUserForHomepage(
  User: TUserData
): Promise<TUserForHomePage> {
  const {
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
    userInfos: { firstName },
    score,
    todayScore,
  } = User
  /*  const todayScore = score * 10
  return {todayScore, ...User} */
  return {
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount,
    firstName,
    score,
    todayScore,
  }
}

export async function formatActivityForHomepage(
  userActivity: TUserActivity
): Promise<TUserActivityForHomePage[]> {
  const sessions = userActivity.sessions.map((session) => {
    const { day, kilogram, calories } = session

    return { day, kilogram, calories }
  })

  return sessions
}

console.log(formatActivityForHomepage(userActivity[0])) 

//const formatDay = (day: string) => (day.indexOf('-') !== -1 ? day.split('-')[2] : day)

/* export async function formatActivityForHomepage(
  userActivity: TUserActivity[]
) : Promise<TUserActivityForHomePage[]> {
  const [{ sessions }] = userActivity
  const [{ day, kilogram, calories }] = sessions
  return [{ day, kilogram, calories }]
}

console.log(formatActivityForHomepage(userActivity)) */