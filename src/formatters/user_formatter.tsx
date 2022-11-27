import {
  TUserData,
  TUserForHomePage,
  TUserActivity,
  TUserActivityForHomePage,
  TUserAverageSessions,
  TUserAverageSessionsForHomePage,
  TUserPerformance,
  TUserPerformanceForHomePage,
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
  const averageSessions = userSession.sessions.map((session, index) => {
    const { day, sessionLength } = session
    /* const numberToDay = day === 1 ? 'L' : day === 2 ? 'M' : day === 3 ? 'M' : day === 4 ? 'J' : day === 5 ? 'V' : day === 6 ? 'S' : 'D' */

    // formats day to return the day of the week
    const dayFormatted = ['L', 'M', 'M', 'J', 'V', 'S', 'D'][index]
    //console.log(day, dayFormatted)
    
    return { day: dayFormatted, sessionLength }
  })

  return averageSessions
}


//formats user activity to return only the data needed for the homepage
export async function formatPerformanceForHomepage(
  userPerformance: TUserPerformance
): Promise<TUserPerformanceForHomePage[]> {
  const perf = userPerformance.data.map((data, index) => {
    const { value, kind } = data
    
    const kindFormatted = ['cardio', 'energie', 'endurance', 'force', 'vitesse', 'intensité'][index]
    //console.log(kind, kindFormatted)

    // formats day to return the day of the week
    /* const dayFormatted = ['L', 'M', 'M', 'J', 'V', 'S', 'D'][index]
    console.log(day, dayFormatted) */
    
    return { value, kind: kindFormatted }
  })
    console.log(perf)

  return perf
}
