import { TooltipProps } from 'types/components.types'
import styles from './CustomTooltip.module.scss'


export const CustomTooltip = ({ active, payload } : TooltipProps) => {

  if (active && payload && payload.length > 0) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.tooltip__content}>{`${payload[0].value}kg`}</p>
        <p className={styles.tooltip__content}>{`${payload[1].value}kCal`}</p>
      </div>
    )
  }

  return null;
};