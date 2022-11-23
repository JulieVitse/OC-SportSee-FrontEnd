import {
  TUserData,
  TUserForHomePage,
  TUserActivity,
  TUserActivityForHomePage,
  TUserAverageSessions,
  TUserAverageSessionsForHomePage,
} from 'types/apiData.types'
//import { userActivity } from '_mocks_/store'

// formats user infos to return only the data needed for the homepage
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

//formats user activity to return only the data needed for the homepage
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

//formats user activity to return only the data needed for the homepage
export async function formatAverageSessionForHomepage(
  userSession: TUserAverageSessions
): Promise<TUserAverageSessionsForHomePage[]> {
  const averageSessions = userSession.sessions.map((session) => {
    const { day, sessionLength } = session
    // formats day to return the day of the week
    const numberToDay = day === 1 ? 'L' : day === 2 ? 'M' : day === 3 ? 'M' : day === 4 ? 'J' : day === 5 ? 'V' : day === 6 ? 'S' : 'D'
    return { day: numberToDay, sessionLength }
  })

  return averageSessions
}

