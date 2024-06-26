import Head from 'next/head';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import MentorForm from '@/components/MentorForm';
import styles from '@/styles/MentorApply.module.css'

export default function MentorApply() {

  const headerTitle = 'Mentee Application';
  const pageLayout = 'layout1';
  const backButton = true;
  const searchBar = false;
  const settings = false;

  return (
    <>
      <Head>
        <title>Mentee Application</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.iphoneFrame}>
        <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} searchBar={searchBar} settings={settings}/>
        <main className={`${styles.main}`}>
          <div className={styles.mainInnerContainer}>
            <MentorForm/>
          </div>
        </main>
        <TabBar/>
      </div>
    </>
  )
} 
