import Image from 'next/image';
import Head from 'next/head';
import styles from './HomeRepairs.module.css';
import React, { useState } from 'react';

export default function HomeRepairsCard( {image, profilePic, name, rating, profession, price}) {
    const [isClicked, setIsClicked] = useState(false);
    return(
        <>
            <div className={styles.mainInnerContainer}>
              <div className={styles.cardContainer}>
                  <div className={styles.imageCard}>
                    <Image src={image} alt="mainImage" width={398} height={172}/>
                    <div className={styles.saveButton} onClick={() => setIsClicked(!isClicked)}>
                        <Image 
                        src={isClicked ? "/images/homeRepairs/favoriteIconFilled.svg" : "/images/homeRepairs/favoriteIcon.svg"} 
                        width={16.67} 
                        height={15.29}
                        />
                    </div>
                    <div className={styles.profilePic}> <Image src={profilePic} width={56} height={56}/>     </div>
                  </div>
                  <div className={styles.bottomCard}>
                    <div className={styles.cardText}>
                      <p>{name} · {rating}</p>
                      <p className={styles.textBolded}>{profession} · {price}</p>
                    </div>
                    <div className={styles.bookButton}>
                        <p>Book Now</p>
                    </div>
                  </div>
              </div>
            </div>
        </>
    )
}