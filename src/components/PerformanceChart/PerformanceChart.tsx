/** recharts dependencies */
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  //Text
} from 'recharts'
/** prop types */
import { PerformanceProps } from 'types/components.types'
/** styles */
import styles from './PerformanceChart.module.scss'
/** helpers */
import { renderPolarAngleAxis } from 'helpers/polarAngleAxis'

/**
 * Component displaying the performance chart of the user
 * @component
 * @param {PerformanceProps} props - types of the props
 * @param {TPerformanceData[]} props.performanceData - The performance data of the user
 * @returns {JSX.Element} The performance chart
 */
export function PerformanceChart({ performanceData }: PerformanceProps): JSX.Element {
  return (
    <div className={styles.container}>
      {performanceData && (
        <ResponsiveContainer width="100%" height={200}>
          <RadarChart outerRadius={80} data={performanceData}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey={'kind'}
              stroke="#FFFFFF"
              tickLine={false}
              tick={(props) => renderPolarAngleAxis(props)}
              fontSize={12}
            />
            <Radar
              name="Performance"
              dataKey={'value'}
              fill="#E60000"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
