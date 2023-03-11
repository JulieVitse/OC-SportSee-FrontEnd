import { TooltipProps } from "types/components.types"
import styles from './SessionsTooltip.module.scss'

export const SessionsTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className={styles.tooltip}>
        <p
          className={styles.tooltip__content}
        >{`${payload[0].value}${payload[0].unit}`}</p>
      </div>
    )
  }
  return null
}
