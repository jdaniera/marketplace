import Image from 'next/image';
import Head from 'next/head';
import styles from './HomeRepairs.module.css';
import React, { useState } from 'react';
import SavedButton from '../SavedButton';

export default function HomeRepairsCard( {image, profilePic, alt, name, rating, profession, price, id, }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleSaveServiceCard = () => {
      saveToLocalStorage({ id, image, alt, profilePic, name, rating, profession, price, type: 'service' });
    }
    return(
        <>
            <div className={styles.mainInnerContainer}>
              <div className={styles.cardContainer}>
                  <div className={styles.imageCard}>
                    <Image src={image} alt="mainImage" width={398} height={172}/>
                    <div className={styles.saveButton}>
                        <SavedButton
                          id={id}
                          image={image}
                          alt={alt}
                          profilePic={profilePic}
                          name={name}
                          rating={rating}
                          profession={profession}
                          price={price}
                          type="service"
                          onClick={handleSaveServiceCard}
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