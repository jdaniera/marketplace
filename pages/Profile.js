import Head from 'next/head';
import styles from '@/styles/Profile.module.css';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import Image from 'next/image';


export default function Profile() {

  const headerTitle = 'Profile';
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
                        <p>ratings (12)</p>
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
                <div className={styles.bottomContainer}>
              <div className={styles.detailsHeader}>
                  <p>Details</p>
              </div>
                <div className={styles.detailsContainer}>
                    <p>Lives in <span className={styles.span}>Mount Pleasant</span> Neighborhood</p>
                    <p>Speaks <span className={styles.span}>English</span> and <span className={styles.span}>Hausa</span></p>
                </div>
                <div className={styles.spacingLine5}></div>
                <div className={styles.reviewSummary}>
                    <p>Jalens Review Summary</p>
                </div>
                <div className={styles.reviewBubbles}>
                    <div className={styles.bubble1}><p>Friendliness (8)</p></div>
                    <div className={styles.bubble2}><p>Punctuality (4)</p></div>
                    <div className={styles.bubble3}><p>Clarity (6)</p></div>
                    <div className={styles.bubble4}><p>Communication (5)</p></div>
                    <div className={styles.bubble5}><p>Prompt Payment (3)</p></div>
                </div>
                <div className={styles.spacingLine6}></div>
                </div>
                <div className={styles.contactInfo}>
                  <div className={styles.contactHeading}><p>Contact Info</p></div>
                  <div className={styles.body2}> <p><span className={styles.span2}>Phone:</span>(604) 222 4444</p></div>
                  <div className={styles.body2}> <p><span className={styles.span2}>Email:</span>jalen134@gmail.com</p></div>
                  <div className={styles.body2}> <p><span className={styles.span2}>Contact Preference:</span>“Call/text before 9pm”</p></div>
                </div>
            </div>
          </main>
        <TabBar/>
      </div>
    </>
  )
} 
