import Head from 'next/head';
import styles from '@/styles/Onboarding.module.css';
import Image from 'next/image';

export default function Onboarding3() {

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <div className={styles.iphoneFrame}>
            <main className={`${styles.main}`}>
            <div className={styles.container}>
                <div className={styles.topText}>
                    <h1>Welcome!</h1>
                    <h3>Let's get started,</h3>
                </div>
                <div className={styles.cardBackground}>
                    <div className={styles.image}>
                        <Image src="/images/OnboardingImages/onboarding3.svg" alt="Onboarding1" width={324} height={296} />
                    </div>
                    <div className={styles.bodyText}>
                        <p>Additionally, you can attend classes held <br></br>by our mentors or partners, and learn a <br></br>variety of new skills.</p>
                    </div>
                    <div>  
                        <button className={styles.button}>Continue</button>
                    </div>
                </div>
                </div>
            </main>
          </div>
        </>
    )
}