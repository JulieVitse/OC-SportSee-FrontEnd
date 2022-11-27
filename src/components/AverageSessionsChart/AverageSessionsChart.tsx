import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { SessionsProps } from 'types/components.types'
import styles from './AverageSessionsChart.module.scss'
import { TooltipProps } from 'types/components.types'

export const SessionsTooltip = ({ active, payload }: TooltipProps) => {
  //console.log(payload[0])
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

export function AverageSessionsChart({ sessionsData }: SessionsProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>
        Durée moyenne des
        <br />
        sessions
      </h3>
      {sessionsData && (
        <ResponsiveContainer width="100%" height={290}>
          <LineChart
            width={500}
            height={290}
            data={sessionsData}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            className={styles.container__chart}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              padding={{ left: 20, right: 20 }}
              tick={{ fill: 'white', opacity: 0.6 }}
            />
            <YAxis
              hide={true}
              domain={['dataMin - 10', 'dataMax + 10']}
              dataKey="sessionLength"
            />

            <Tooltip
              wrapperStyle={{ outline: 'none' }}
              cursor={{ fill: 'white', opacity: 0 }}
              content={<SessionsTooltip active={true} payload={sessionsData} />}
            />

            <Line
              type="natural"
              dot={false}
              unit="min"
              dataKey={'sessionLength'}
              stroke="#FFFFFF"
              activeDot={{ r: 5 }}
              strokeWidth={2}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
