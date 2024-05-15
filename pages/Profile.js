import Head from 'next/head';
import styles from '@/styles/Profile.module.css';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import Image from 'next/image';


export default function Profile() {

  const headerTitle = 'Username';
  const pageLayout = 'layout1';
  const backButton = true;
  const searchBar = true;
  const settings = true;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar layout={pageLayout} title={headerTitle} backButton={false} searchBar={searchBar} settings={false}/>
        <div className={styles.iphoneFrame}>
          <main className={`${styles.main}`}>
            <div className={styles.mainInnerContainer}>
              <div className={styles.header}>
                <div className={styles.name}><p>Jalen Smith</p></div>
                <div className={styles.userName}><p>@paintlove</p></div>
              </div>
              <div className={styles.profileSection}>
                <div className={styles.profilePicture}><Image src="/images/bookingPaymentImages/jalenPFP.svg" width={136} height={136} alt="Profile Picture"/></div>
                  <div className={styles.aboutContainer}>
                    <div className={styles.aboutHeader}>
                      <p>About</p>
                    </div>
                    <div className={styles.aboutBody}>
                    <p>Hi Im Jalen and I love to bake. Im also passionate about photography and reading!</p>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingContainer}>
                  <div className={styles.ratingInnerContainer}>
                    <div className={styles.ratingSection1}>
                      <div className={styles.ratingHeader}>
                        <p>4.9</p>
                      </div>
                      <div className={styles.ratingBody}>
                        <p>ratings(12)</p>
                      </div>
                    </div>
                    <div className={styles.ratingSection1}>
                      <div className={styles.ratingHeader}>
                        <p>12</p>
                      </div>
                      <div className={styles.ratingBody}>
                        <p>Services Used</p>
                      </div>
                    </div>
                    <div className={styles.ratingSection1}>
                      <div className={styles.ratingHeader}>
                        <p>2.5</p>
                      </div>
                      <div className={styles.ratingBody}>
                        <p>years active</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </main>
        <TabBar/>
      </div>
    </>
  )
} 
