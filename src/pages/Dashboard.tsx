import { useEffect, useState } from 'react'
import styles from './Dashboard.module.scss'
import { useParams } from 'react-router-dom'
import { getUserData, getUserActivity } from 'api/userData'
import {
  TUserData,
  TUserForHomePage,
  TUserActivityForHomePage,
  TUserActivity,
  //TSessions
} from 'types/dataUser.types'
import {
  formatActivityForHomepage,
  formatUserForHomepage,
} from 'formatters/user_formatter'
import {ActivityChart} from 'components/ActivityChart/ActivityChart'

//import { getUserData } from '_mocks_/userData'

function Dashboard() {
  const { id } = useParams<string>()
  const [user, setUser] = useState<TUserForHomePage>()
  const [activity, setActivity] = useState<TUserActivityForHomePage[]>()

  useEffect(() => {
    const getData = async (id: string) => {
      try {
        const userData: TUserData = await getUserData(id)
        setUser(await formatUserForHomepage(userData))
        /* const {calorieCount, proteinCount} = await formatUserForHomepage(userData)
        setUserFirstName(firstName) */
        //setUser(userData.userInfos)
        const userActivity: TUserActivity = await getUserActivity(id)
        // ! setActivity(userActivity.sessions)
        //console.log(userActivity)
        setActivity(await formatActivityForHomepage(userActivity))
        //console.log(userActivity.sessions)
      } catch (err: any) {
        console.log('Error:', err)
      }
    }
    getData(id!)
  }, [id])
 
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

        <ActivityChart activityData={activity!} />
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
