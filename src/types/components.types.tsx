/** types for component props */
import {
  TPerformanceData,
  TSessions,
  TUserAverageSessionsForHomePage,
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

export type ScoreProps = {
  score: number
}

export type CardProps = {
  name: string
  value: number
  unit: string
  image: string
  color: string
}
