import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Dashboard.module.scss'
/** api */
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from 'api/userData'
/** types */
import {
  TUserData,
  TUserForHomePage,
  TUserActivityForHomePage,
  TUserActivity,
  TUserAverageSessions,
  TUserAverageSessionsForHomePage,
  TUserPerformanceForHomePage,
  TUserPerformance,
  TKeyDataForHomePage,
} from 'types/apiData.types'
/** data formatters */
import {
  formatActivityForHomepage,
  formatAverageSessionForHomepage,
  formatUserForHomepage,
  formatPerformanceForHomepage,
  formatKeyDataForHomepage,
} from 'formatters/user_formatter'
/** components */
import { ActivityChart } from 'components/ActivityChart/ActivityChart'
import { AverageSessionsChart } from 'components/AverageSessionsChart/AverageSessionsChart'
import { PerformanceChart } from 'components/PerformanceChart/PerformanceChart'
import { ScoreChart } from 'components/ScoreChart/ScoreChart'
import { Card } from 'components/Card/Card'
import { Error } from 'pages/Error/Error'
/** mock data */
//import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '_mocks_/userData'

/**
 * Component for rendering the dashboard page
 * @component
 * @returns {JSX.Element} The dashboard page
 */

function Dashboard(): JSX.Element {
  /* gets id from url */
  const { id } = useParams<string>()
  /* component states */
  const [user, setUser] = useState<TUserForHomePage>()
  const [activity, setActivity] = useState<TUserActivityForHomePage[]>()
  const [averageSession, setAverageSession] =
    useState<TUserAverageSessionsForHomePage[]>()
  const [performance, setPerformance] =
    useState<TUserPerformanceForHomePage[]>()
  const [score, setScore] = useState<number>()
  const [keyData, setKeyData] = useState<TKeyDataForHomePage[]>()

  /* gets user data from api, sets states after formatting it */
  useEffect(() => {
    const getData = async (id: string) => {
      try {
        const userData: TUserData = await getUserData(id)
        setUser(await formatUserForHomepage(userData))
        setScore(user?.score ? user?.score : user?.todayScore)
        setKeyData(await formatKeyDataForHomepage(userData))

        const userActivity: TUserActivity = await getUserActivity(id)
        setActivity(await formatActivityForHomepage(userActivity))

        const userAverageSession: TUserAverageSessions =
          await getUserAverageSessions(id)
        setAverageSession(
          await formatAverageSessionForHomepage(userAverageSession)
        )

        const userPerformance: TUserPerformance = await getUserPerformance(id)
        setPerformance(await formatPerformanceForHomepage(userPerformance))
      } catch (err: any) {
        console.log('Error:', err)
      }
    }
    getData(id!)
  }, [id, user?.score, user?.todayScore])

  /* renders the dashboard page if user id exists */
  //if (id === '15') { // condition to test mock data
  if (user) {
    return (
      <main className={styles.main}>
        <section className={styles.dashboard}>
          <h1 className={styles.dashboard__title}>
            Bonjour{' '}
            <span className={styles.dashboard__title__username}>
              {user?.firstName}
            </span>
          </h1>
          <p className={styles.dashboard__subtitle}>
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>

          <div className={styles.dashboard__container}>
            <div className={styles.dashboard__container__left}>
              <ActivityChart activityData={activity!} />

              <div className={styles.dashboard__container__charts}>
                <AverageSessionsChart sessionsData={averageSession!} />
                <PerformanceChart performanceData={performance!} />
                <ScoreChart score={score!} />
              </div>
            </div>

            <aside className={styles.dashboard__container__right}>
              {keyData?.map((info, index) => (
                <Card
                  name={info.name}
                  value={info.value}
                  unit={info.unit}
                  image={info.image}
                  color={info.color}
                  key={`${info.name} + ${index}`}
                />
              ))}
            </aside>
          </div>
        </section>
      </main>
    )
    /* renders error page if user id does not exist */
  } else return <Error />
}

export default Dashboard
