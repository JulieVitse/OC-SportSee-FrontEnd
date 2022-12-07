/** recharts dependencies */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
/** prop types */
import { SessionsProps } from 'types/components.types'
/** styles */
import styles from './AverageSessionsChart.module.scss'
/** components */
import { SessionsTooltip } from 'components/SessionsTooltip/SessionsTooltip'

/**
 * Component displaying the average sessions chart of the user
 * @component
 * @param {SessionsProps} props - types of the props
 * @param {TUserAverageSessionsForHomePage[]} props.sessionsData - The sessions data of the user
 * @returns {JSX.Element} The average sessions chart
 */

export function AverageSessionsChart({ sessionsData }: SessionsProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>
        Durée moyenne des
        <br />
        sessions
      </h3>
      {sessionsData && (
        <ResponsiveContainer width="100%" height={200} className={styles.responsiveContainer}>
          <LineChart
            width={500}
            data={sessionsData}
            margin={{ top: 32, right: 0, bottom: 0, left: 0 }}
            className={styles.responsiveContainer__chart}
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
