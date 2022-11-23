import {
  TUserData,
  TUserForHomePage,
  TUserActivity,
  TUserActivityForHomePage,
  //TSessions
} from 'types/apiData.types'
//import { userActivity } from '_mocks_/store'

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
    
    // formats date to return only the day
    const [ dayNumber ] = day.split('-').slice(-1)
    // removes the 0 in front of the day number
    const dayToNumber = dayNumber.substring(1)
    return { day: dayToNumber, kilogram, calories }
  })

  return sessions
}
