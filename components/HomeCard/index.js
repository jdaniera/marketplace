import React from "react";
import styles from './HomeCard.module.css';
import Image from 'next/image';

export default function HomeCard({ header, date, image, alt }) {
    return (
        <div className={styles.homeCardContainer}>
            <div className={styles.homeCardInnerContainer}>
                <div className={styles.button}>
                    <button>Edit</button>
                </div>
                <div className={styles.homeCardHeader}>
                    <p>{header}</p>
                </div>
                <div className={styles.homeCardDate}>
                    <p>{date}</p>
                </div>
                <div className={styles.homeCardImage}>
                    <Image src={image} alt={alt} width={362} height={149}/>
                </div>
            </div>
        </div>
    );
}