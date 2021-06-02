import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.container}>

        <main className={styles.main}>
            <div className={styles.carder}>

            <div className={styles.centerdiv}>
                    <a href="/comic/2469">&#8592;</a>
                </div>

                <h1 className={styles.title}>
                Astronomy Status Board
                </h1>

                <br />
                <img src="/images/2469.png"></img>
                <br />

                <p className={styles.description}>

                </p>

                <div className={styles.centerdiv}>
                    <a href="/comic/2469">&#8592;</a>
                </div>

            </div>
        </main>

    </div>
</>
  )
}
