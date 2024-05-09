import React from "react";
import Styles from './ServiceCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ClassesCard({title, location, image, alt, buttonText}) {
    return(
        <div className={Styles.classesCardContainer}>
            <div className={Styles.classesCardInnerContainer}>
                <div className={Styles.imageContainer}>
                <Image src={image} alt={alt} width={191} height={168}/>
                </div>
                <div className={Styles.cardHeader}>
                <p>{title}</p>
                </div>
                <div className={Styles.cardButton}>
                    <button>{buttonText}</button>
                </div>
            </div>
        </div>
        
    ) 

}