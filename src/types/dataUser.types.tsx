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

export type TUserForHomePage = {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
  firstName: string
  score: number
  todayScore: number
}

export type TUserActivity = {
  userId: number,
  sessions: TSessions[]
}

export type TSessions = {
  day: string,
  kilogram: number,
  calories: number
}





export type TUserActivityForHomePage = {
  day: string,
  kilogram: number,
  calories: number
}