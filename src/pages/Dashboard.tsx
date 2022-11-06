import { useEffect, useState } from 'react'
import styles from './Dashboard.module.scss'
import { useParams } from 'react-router-dom'
import getUserData from 'api/userData'
import { TUserData, TUserInfos /* TKeyData */ } from 'types/dataUser.types'

function Dashboard() {
  const { id } = useParams<string>()
  const [user, setUser] = useState<TUserInfos>()

  useEffect(() => {
    const getData = async (id: string) => {
      try {
        const userData: TUserData = await getUserData(id)

        setUser(userData.userInfos)
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
