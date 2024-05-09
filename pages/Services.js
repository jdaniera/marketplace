import Head from 'next/head';
import styles from '@/styles/Services.module.css';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import FindMentor from '@/components/FindMentor';
import ServicesCardSection from '@/components/ServiceCardSection';
import Confirmation from '@/components/Confirmation';


export default function Services() {

  const headerTitle = 'Services';
  const pageLayout = 'layout1';
  const backButton = true;
  const searchBar = true;
  const settings = false; 

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.iphoneFrame}>
        <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} />
        <main className={`${styles.main}`}>
          <div className={styles.mainInnerContainer}>
            <ServicesCardSection />
          </div>
        </main>
        <TabBar/>
      </div>
    </>
  )
} 