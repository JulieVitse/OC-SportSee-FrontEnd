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

import { TSessions } from 'types/dataUser.types'
import styles from './ActivityChart.module.scss'

type ActivityProps = {
  activityData: TSessions[]
}

export function ActivityChart({ activityData }: ActivityProps) {
  return (
    <div className={styles.grid}>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart width={500} height={300} data={activityData}>
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
            domain={['dataMin -2', 'dataMax + 2']}
          />
          <YAxis hide yAxisId="right" />
          <Tooltip
            wrapperStyle={{ outline: 'none' }}
            cursor={{ fill: 'gray', opacity: 0.1 }}
          />
          <text x={0} y={20} className={styles.activity}>
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
            className={styles.barKilo}
            name="Poids (kg)"
          />
          <Bar
            dataKey="calories"
            barSize={8}
            radius={[10, 10, 0, 0]}
            yAxisId="right"
            className={styles.barCalories}
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
