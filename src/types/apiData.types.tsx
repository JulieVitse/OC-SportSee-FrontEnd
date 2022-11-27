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
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
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

/* export type TPerformanceKind = {
  1 : string,
  2 : string,
  3 : string,
  4 : string,
  5 : string,
  6 : string
} */

export type TPerformanceData = {
  value: number,
  kind: string
}

export type TUserPerformanceForHomePage = {
  kind: string,
  value: number
}