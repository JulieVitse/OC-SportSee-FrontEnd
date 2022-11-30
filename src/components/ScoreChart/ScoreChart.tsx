import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar
} from 'recharts'
import { ScoreProps } from 'types/components.types'
import styles from './ScoreChart.module.scss'

export function ScoreChart({ score }: ScoreProps) {
  const data = [
    {
      score: 100,
      fill: 'white'
    },
    {
      score: score,
      fill: '#E60000'
    }
  ]
  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>
        Score
      </h3>
      <h4 className={styles.container__text}>
        {score}% <br />
        <span className={styles.container__text__span}>
          de votre
          <br /> objectif
        </span>
      </h4>
      {score && (
        <ResponsiveContainer width="100%" height={200}>
          <RadialBarChart
            width={400}
            height={290}
            innerRadius="80%"
            barSize={10}
            outerRadius="80%"
            data={data}
            startAngle={90}
            endAngle={450}
          >
            <RadialBar
              background={{ fill: 'white' }}
              cornerRadius={5}
              max={100}
              dataKey="score"
              className={styles.container__bar}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
