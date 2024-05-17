import { useEffect, useState } from 'react';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import CategoriesHome from '@/components/CategoriesHome';
import Map from '@/components/Map';
import FindMentor from '@/components/FindMentor';
import HomeCardSection from '@/components/HomeCardSection';
import PieChart from '@/components/PieChart';
import TabBar from '@/components/TabBar';
import HelloPopup from '@/components/HelloPopup';
import styles from '@/styles/Home.module.css';
import PieChartCard from '@/components/PieChartCard';

export default function Home() {
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('isFirstLoad')) {
      setIsFirstLoad(true);
      localStorage.setItem('isFirstLoad', 'true');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  }, []);

  const headerTitle = 'Welcome, Jalen!';
  const pageLayout = 'layout1';
  const backButton = false;
  const searchBar = true;
  const settings = false;

  return (
    <>
      {showPopup && <HelloPopup />}
      <Head>
        <title>Neighbourly</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} searchBar={searchBar} settings={settings}/>
      <div className={styles.iphoneFrame}>
        <main className={styles.main}>
          <div className={styles.mainInnerContainer}>
            <CategoriesHome/>
            <Map/>
            <div className={styles.mentorship}>
              <FindMentor/>
            </div>
            <HomeCardSection/>
            <div className={styles.statsContainer}>
                <PieChartCard/>
            </div>
          </div>
        </main>
        <TabBar/>
      </div>
    </>
  )
}