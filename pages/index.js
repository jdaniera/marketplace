import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import Survey from '@/components/Survey/Survey';
import CategoriesHome from '@/components/CategoriesHome';
import Mentorship from '@/components/Mentorship';
import HomeCardSection from '@/components/HomeCardSection';
import Map from '@/components/Map'
import PieChart from '@/components/PieChart';

import ServicesCard from '@/components/ServicesCard';

export default function Home() {

  const headerTitle = 'Welcome, {user}!';
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
            <CategoriesHome/>
            <Map/>
            <div className={styles.mentorship}>
            <Mentorship/>
            </div>
            <HomeCardSection/>
            <div className={styles.statsContainer}>
              <div className={styles.statsInnerContainer}>
                <h3>Gig Workers in Canada</h3>
                <PieChart/>
              </div>
            </div>
            </div>
          </main>
        <TabBar/>
      </div>
    </>
  )
} 
