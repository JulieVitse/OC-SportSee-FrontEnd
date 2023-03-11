/* eslint-disable @typescript-eslint/no-unused-vars */
/** types */
import {
  TUserData,
  TUserForHomePage,
  TUserActivity,
  TUserActivityForHomePage,
  TUserAverageSessions,
  TUserAverageSessionsForHomePage,
  TUserPerformance,
  TUserPerformanceForHomePage,
  TKeyDataForHomePage,
} from 'types/apiData.types'
/** images */
import chicken from 'assets/chicken.svg'
import energy from 'assets/energy.svg'
import apple from 'assets/apple.svg'
import cheeseburger from 'assets/cheeseburger.svg'

// * import { userActivity } from '_mocks_/store'

/**
 * Formats user infos to return only the data needed for the homepage
 * @async
 * @function
 * @param {TUserData} User - The user data
 * @returns {TUserForHomePage} The user data formatted for the homepage
 */
export async function formatUserForHomepage(
  User: TUserData
): Promise<TUserForHomePage> {
  const {
    userInfos: { firstName },
    score,
    todayScore,
  } = User
  /** 
   * Formats user score to be displayed as a percentage
   * @type number 
   */
  const scoreFormatted: number = score ? score * 100 : todayScore * 100
  
  return {
    firstName,
    score: scoreFormatted,
    todayScore: scoreFormatted,
  }
}

/**
 * Formats user key data to return only the data needed for the homepage
 * @async
 * @function
 * @param {TUserData} userKeyData - The user key data
 * @returns {TKeyDataForHomePage[]} The user key data formatted for the homepage
 */

export async function formatKeyDataForHomepage(userKeyData: TUserData): Promise<TKeyDataForHomePage[]> {
  const {
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount }
  } = userKeyData

  /**
   * Creates an array of objects containing the data needed for the homepage
   * @type {TKeyDataForHomePage[]}
   */
  const nutrientsInfos: TKeyDataForHomePage[] = [
    {
      value: calorieCount,
      name: 'Calories',
      unit: 'kCal',
      image: energy,
      color: 'red'
    },
    {
      value: proteinCount,
      name: 'Protéines',
      unit: 'g',
      image: chicken,
      color: 'blue'
    },
    {
      value: carbohydrateCount,
      name: 'Glucides',
      unit: 'g',
      image: apple,
      color: 'yellow'
    },
    {
      value: lipidCount,
      name: 'Lipides',
      unit: 'g',
      image: cheeseburger,
      color: 'pink'
    }
  ]

  return nutrientsInfos
}

/**
 * Formats user activity to return only the data needed for the homepage
 * @async
 * @function
 * @param {TUserActivity} userActivity - The user activity data
 * @returns {TUserActivityForHomePage[]} The user performance data formatted for the homepage
 */
export async function formatActivityForHomepage(
  userActivity: TUserActivity
): Promise<TUserActivityForHomePage[]> {
  /**
   * Destructures and formats user activity to return only the data needed for the homepage
   * @type {TUserActivityForHomePage[]}
   */
  const sessions: TUserActivityForHomePage[] = userActivity.sessions.map((session) => {
    const { day, kilogram, calories } = session
    
    /**
     * Formats date to return only the day number
     * @example '2021-05-01' => '01'
     */
    const [ dayNumber ] = day.split('-').slice(-1)
    /**
     * Formats day number to remove the 0 at the beginning
     * @example '01' => '1'
     */
    const dayToNumber = dayNumber.substring(1)

    return { day: dayToNumber, kilogram, calories }
  })

  return sessions
}

/**
 * Formats user average sessions to return only the data needed for the homepage
 * @async
 * @function
 * @param {TUserAverageSessions} userSession - The user average sessions data
 * @returns {TUserAverageSessionsForHomePage[]} The user average sessions data formatted for the homepage
 */
export async function formatAverageSessionForHomepage(
  userSession: TUserAverageSessions
): Promise<TUserAverageSessionsForHomePage[]> {
  /**
   * Destructures and formats user average sessions to return only the data needed for the homepage
   * @type {TUserAverageSessionsForHomePage[]}
   */
  const averageSessions: TUserAverageSessionsForHomePage[] = userSession.sessions.map((session, index) => {
    const { sessionLength } = session
    /**
     * Formats day to return days of the week
     * @example '1' => 'L'
     */
    const dayFormatted = ['L', 'M', 'M', 'J', 'V', 'S', 'D'][index]
    
    return { day: dayFormatted, sessionLength }
  })

  return averageSessions
}

/**
 * Formats user performance to return only the data needed for the homepage
 * @async
 * @function
 * @param {TUserPerformance} userPerformance - The user performance data
 * @returns {TUserPerformanceForHomePage[]} The user performance data formatted for the homepage
 */
export async function formatPerformanceForHomepage(
  userPerformance: TUserPerformance
): Promise<TUserPerformanceForHomePage[]> {
  /**
   * Destructures and formats user performance to return only the data needed for the homepage
   * @type {TUserPerformanceForHomePage[]}
   */
  const performance: TUserPerformanceForHomePage[] = userPerformance.data.map((data, index) => {
    const { value } = data
    /**
     * Formats kind to translate them in french
     * @example 'energy' => 'Energie'
     */
    const kindFormatted = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité'][index]
    
    return { value, kind: kindFormatted }
  })
  return performance
}
