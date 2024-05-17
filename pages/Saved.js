import Head from 'next/head';
import styles from '@/styles/Saved.module.css';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import { useEffect, useState } from 'react';
import ClassesCard from '@/components/ClassesCard';
import HomeRepairsCard from '@/components/HomeRepairsCard'; // Import HomeRepairsCard
import style from '@/styles/Saved.module.css'

export default function Saved() {
  const headerTitle = 'Saved';
  const pageLayout = 'layout1';
  const backButton = true;
  const searchBar = true;
  const settings = true;

  const [savedItems, setSavedItems] = useState([]);

  const savedClasses = savedItems.filter(item => item.type === 'class');
  const savedServices = savedItems.filter(item => item.type === 'service');

  useEffect(() => {
    const savedItemsArray = JSON.parse(localStorage.getItem('savedItems') || '[]');
    setSavedItems(savedItemsArray);
  }, []);

  return (
    <>
      <Head>
        <title>Saved Items</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} searchBar={searchBar} settings={settings} />
      <div className={styles.iphoneFrame}>
        <main className={styles.main}>
          <div className={styles.mainInnerContainer}>
            <div className={styles.savedCardContainer}>
              {savedClasses.length > 0 && (
                  <div className={styles.classesSectionContainer}>
                    <div>
                      <h2>Saved Classes & Workshops</h2>
                    </div>
                    <div className={styles.classesSection}>
                      {savedClasses.map((item, index) => (
                        <ClassesCard
                          key={index}
                          id={item.id}
                          title={item.title}
                          subtitle={item.subtitle}
                          image={item.image}
                          alt={item.alt}
                          link={item.link}
                          buttonText={item.buttonText}
                          query={item.query}
                          profilePic={item.profilePic}
                          name={item.name}
                          rating={item.rating}
                          profession={item.profession}
                          price={item.price}
                        />
                      ))}
                    </div>
                    
                  </div>
                )}  

                <hr/>
              
              {savedServices.length > 0 && (
                <div className={styles.servicesSection}>
                  <div>
                    <h2>Saved Services</h2>
                  </div>
                  {savedServices.map((item, index) => (
                    <HomeRepairsCard
                      key={index}
                      id={item.id}
                      image={item.image}
                      alt={item.alt}
                      profilePic={item.profilePic}
                      name={item.name}
                      rating={item.rating}
                      profession={item.profession}
                      price={item.price}
                    />
                  ))}
                </div>
              )}
                
              {savedClasses.length === 0 && savedServices.length === 0 && (
                <p>No saved items yet.</p>
              )}
            </div>
          </div>
        </main>
        <TabBar />
      </div>
    </>
  );
}
