import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Text
} from 'recharts'
import { PerformanceProps } from 'types/components.types'
import styles from './PerformanceChart.module.scss'

export function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }: any) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 12}
      x= {x + (x - cx) / 30}
    >
      {payload.value}
    </Text>
  )
}

export function PerformanceChart({ performanceData }: PerformanceProps) {
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
