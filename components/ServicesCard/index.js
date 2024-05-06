import React from "react";
import Styles from './ServiceCard.module.css';
import Image from 'next/image';

export default function ServicesCard({title, image, alt, buttonText}) {
    return(
        <div className={Styles.classesCardContainer}>
            <div className={Styles.classesCardInnerContainer}>
                <div className={Styles.imageContainer}>
                <Image src={image} alt={alt} width={191} height={168}/>
                </div>
                <div className={Styles.cardHeader}>
                    <p>{title}</p>
                    <Image src="/images/classesFeaturedCard/heartIcon.svg" width={0} height={0} alt="Heart Icon"/>
                </div>

                <div className={Styles.cardButton}>
                <button>{buttonText}</button>
                </div>

            </div>
        </div>
        
    ) 

}