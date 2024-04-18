import React from "react";
import styles from './ServiceCard.module.css';
import Image from 'next/image';


export default function ServicesCard({ header, image, alt }) {
    return (
        <div className={styles.serviceCardContainer}>
            <div className={styles.serviceCardImage}>
                <Image src={image} alt={alt} width={191} height={168}/>
            </div>
            <div className={styles.button}>
                <button>See More</button>
            </div>
            <div className={styles.serviceCardHeader}>
                <p>{header}</p>
            </div>
        </div>
    );
}