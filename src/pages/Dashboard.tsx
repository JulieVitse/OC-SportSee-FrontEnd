import { useEffect, useState } from 'react'
import styles from './Dashboard.module.scss'
import { useParams } from 'react-router-dom'
import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from 'api/userData'
import {
  TUserData,
  TUserForHomePage,
  TUserActivityForHomePage,
  TUserActivity,
  TUserAverageSessions,
  TUserAverageSessionsForHomePage,
  TUserPerformanceForHomePage,
  TUserPerformance,
} from 'types/apiData.types'
import {
  formatActivityForHomepage,
  formatAverageSessionForHomepage,
  formatUserForHomepage,
  formatPerformanceForHomepage
} from 'formatters/user_formatter'
import { ActivityChart } from 'components/ActivityChart/ActivityChart'
import { AverageSessionsChart } from 'components/AverageSessionsChart/AverageSessionsChart'
import { PerformanceChart } from 'components/PerformanceChart/PerformanceChart'
import { ScoreChart } from 'components/ScoreChart/ScoreChart'

//import { getUserData } from '_mocks_/userData'

/** @type {number[]} */

function Dashboard() {
  const { id } = useParams<string>()
  const [user, setUser] = useState<TUserForHomePage>()
  const [activity, setActivity] = useState<TUserActivityForHomePage[]>()
  //const [isLoading, setIsLoading] = useState<boolean>(true)
  const [averageSession, setAverageSession] = useState<TUserAverageSessionsForHomePage[]>()
  const [performance, setPerformance] = useState<TUserPerformanceForHomePage[]>()
  const [score, setScore] = useState<number>()

  useEffect(() => {
    const getData = async (id: string) => {
      try {
        const userData: TUserData = await getUserData(id)
        setUser(await formatUserForHomepage(userData))

        setScore(user?.score ? user?.score : user?.todayScore)
        
        /* const {calorieCount, proteinCount} = await formatUserForHomepage(userData)
        setUserFirstName(firstName) */
        const userActivity: TUserActivity = await getUserActivity(id)
        setActivity(await formatActivityForHomepage(userActivity))

        const userAverageSession: TUserAverageSessions = await getUserAverageSessions(id)
        setAverageSession(await formatAverageSessionForHomepage(userAverageSession))

        const userPerformance: TUserPerformance = await getUserPerformance(id)
        setPerformance(await formatPerformanceForHomepage(userPerformance))

      } catch (err: any) {
        console.log('Error:', err)
      }
    }
    getData(id!)
  }, [id, user?.score, user?.todayScore])
  
  return user ? (
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

          <ActivityChart activityData={activity!} />

          <div className={styles.dashboard__container__charts}>
            <AverageSessionsChart sessionsData={averageSession!} />
            <PerformanceChart performanceData={performance!} />
            <ScoreChart score={score!} />
          </div>
        </div>
      </section>
    </main>
  ) : (
    <main className={styles.main}>
      <div className={styles.error}>
        <h1 className={styles.error__title}>{'Oops!'.toUpperCase()}</h1>
        <h2 className={styles.error__message}>
          The specified user does not exist.
        </h2>
      </div>
    </main>
  )
}

export default Dashboard
