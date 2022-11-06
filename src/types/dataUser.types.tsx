/* export type TUserData = {
  data: {
    id: number
    userInfos: {
      firstName: string
      lastName: string
      age: number
    }
    todayScore: number
    keyData: {
      calorieCount: number
      proteinCount: number
      carbohydrateCount: number
      lipidCount: number
    }
  }
}
 */


export type TUserData = {
  id: number
  userInfos: TUserInfos
  todayScore: number
  score: number
  keyData: TKeyData
}

export type TUserInfos = {
  firstName: string
  lastName: string
  age: number
}

export type TKeyData = {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}