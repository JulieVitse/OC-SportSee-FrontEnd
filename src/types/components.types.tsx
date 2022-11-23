import { TSessions } from "./apiData.types"

export type ActivityProps = {
  activityData: TSessions[]
}

export type TooltipProps = {
  active: boolean,
  payload: any
}