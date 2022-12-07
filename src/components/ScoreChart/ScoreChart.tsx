/** recharts dependencies */
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
/** prop types */
import { ScoreProps } from 'types/components.types'
/** styles */
import styles from './ScoreChart.module.scss'

/**
 * Component displaying the score chart of the user
 * @component
 * @param {ScoreProps} props - types of the props
 * @param {number} props.score - The score of the user
 * @returns {JSX.Element} The score chart
 */

export function ScoreChart({ score }: ScoreProps): JSX.Element {
  // creates data for the chart
  const data = [
    {
      score: 100, // max score
      fill: 'white', // background color
    },
    {
      score: score, // current user score
      fill: '#E60000', // current score color 
    },
  ]
  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>Score</h3>
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
