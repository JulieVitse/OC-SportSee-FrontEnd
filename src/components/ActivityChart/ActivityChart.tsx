import { ActivityProps } from 'types/components.types'
import { CustomTooltip } from 'components/CustomTooltip/CustomTooltip'
import styles from './ActivityChart.module.scss'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
} from 'recharts'

export function ActivityChart({ activityData }: ActivityProps) {
  return (
    <div className={styles.container}>
      {activityData && (
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={activityData}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="4 4"
            stroke="#9B9EAC"
          />
          <XAxis
            dataKey="day"
            axisLine={true}
            tickLine={false}
            stroke="#9B9EAC"
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            yAxisId="left"
            orientation="right"
            tickCount={3}
            domain={['dataMin -2', 'dataMax +1']}
          />
          <YAxis hide yAxisId="right" />
          <Tooltip
            wrapperStyle={{ outline: 'none' }}
            cursor={{ fill: 'gray', opacity: 0.3 }}
            content={<CustomTooltip active={true} payload={activityData} />}
            offset={30}
            allowEscapeViewBox={{ x: true }}
            position={{ y: 0 }}
          />

          <text x={5} y={15} className={styles.container__title}>
            Activité quotidienne
          </text>

          <Legend
            align="right"
            verticalAlign="top"
            height={80}
            iconSize={14}
            iconType="circle"
            wrapperStyle={{ right: 30, top: 0 }}
          />
          <Bar
            dataKey="kilogram"
            barSize={8}
            radius={[10, 10, 0, 0]}
            yAxisId="left"
            className={styles.container__barKilo}
            name="Poids (kg)"
          />
          <Bar
            dataKey="calories"
            barSize={8}
            radius={[10, 10, 0, 0]}
            yAxisId="right"
            className={styles.container__barCalories}
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
      )}
    </div>
  )
}
