import styles from './Error.module.scss'

export function Error() {
    return (
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