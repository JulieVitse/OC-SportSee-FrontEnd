import {
  TPerformanceData,
  TSessions,
  TUserAverageSessionsForHomePage,
  TUserPerformanceForHomePage,
} from './apiData.types'

export type ActivityProps = {
  activityData: TSessions[]
}

export type TooltipProps = {
  active: boolean
  payload: any
}

export type SessionsProps = {
  sessionsData: TUserAverageSessionsForHomePage[]
}

export type PerformanceProps = {
  performanceData: TPerformanceData[]
}
