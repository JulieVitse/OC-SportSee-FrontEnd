/* ------------------------------ general data ------------------------------ */
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
// formatter
export type TUserForHomePage = {
  firstName: string
  score: number
  todayScore: number
}
/* ------------------------------ activity data ----------------------------- */
export type TUserActivity = {
  userId: number,
  sessions: TSessions[]
}
export type TSessions = {
  day: string,
  kilogram: number,
  calories: number
}
// formatter
export type TUserActivityForHomePage = {
  day: string,
  kilogram: number,
  calories: number
}
/* -------------------------- average sessions data ------------------------- */
export type TUserAverageSessions = {
  userId: number,
  sessions: TAverageSessions[]
}
export type TAverageSessions = {
  day: number,
  sessionLength: number
}
// formatter
export type TUserAverageSessionsForHomePage = {
  day: string,
  sessionLength: number
}

/* ---------------------------- performance data ---------------------------- */
export type TUserPerformance = {
  userId: number,
  kind: TPerformanceData[],
  data: TPerformanceData[]
}

export type TPerformanceData = {
  value: number,
  kind: string
}
// formatter
export type TUserPerformanceForHomePage = {
  value: number,
  kind: string
}

//keyData formatter
export type TKeyDataForHomePage = {
  value: number,
  name: string,
  unit: string,
  image: string,
  color: string
}