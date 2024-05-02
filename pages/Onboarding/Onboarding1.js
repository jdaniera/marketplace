import styles from '../../styles/Onboarding.module.css'
import Head from 'next/head';

export default function Onboarding1() {
    return(
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.iphoneFrame}>
                <main className={`${styles.main}`}></main>
                <div className={styles.background}></div>
                    <div className={styles.mainContainer}>

                    </div>
                </div>
        </>
    )
}