import React from "react";
import styles from './ServiceCard.module.css';
import Image from 'next/image';
import Link from 'next/link'


export default function ServicesCard({ header, subheader, image, alt, buttonText, buttonLink}) {
    return (
        <div className={styles.serviceCardContainer}>
            <div className={styles.serviceCardImage}>
                <Image src={image} alt={alt} width={191} height={168}/>
            </div>
            <div className={styles.serviceCardBottom}>
                <div className={styles.serviceCardHeader}>
                    <p>{header}</p>
                </div>
                <div className={styles.serviceCardSubheader}>
                 <p>{subheader}</p>
                </div>
                <div className={styles.button}>
                        <button>{buttonText}</button>
                </div>
            </div>
        </div>
    );
}