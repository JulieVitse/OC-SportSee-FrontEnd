import {
  TUserData,
  TUserForHomePage,
  TUserActivity,
  TUserActivityForHomePage,
  TSessions
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
  userActivity: TSessions[]
): Promise<TUserActivityForHomePage> {
  const [{
    day, kilogram, calories
  }] = userActivity

  return { day, kilogram, calories } 

}

console.log(formatActivityForHomepage(userActivity[1].sessions))

/* export async function formatActivityForHomepage(
  userActivity: TUserActivity
) : Promise<TUserActivityForHomePage> {
  const { sessions } = userActivity
  const [{ day, kilogram, calories }] = sessions
  return { day, kilogram, calories }
}

console.log(formatActivityForHomepage(userActivity[1])) */