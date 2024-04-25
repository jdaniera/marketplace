import React from "react";
import Styles from './ClassesCard.module.css';
import Image from 'next/image';

export default function ClassesCard({title, location, image, alt}) {
    return(
        <div className={Styles.classesCardContainer}>
            <div className={Styles.classesCardInnerContainer}>
                <div className={Styles.imageContainer}>
                <Image src={image} alt={alt} width={191} height={168}/>
                </div>
                <div className={Styles.cardHeader}>
                <p>{title}</p>
                    <Image src="/images/classesFeaturedCard/heartIcon.svg" width={16.7} height={15.5} alt="Heart Icon" />
                </div>
                <div className={Styles.cardLocation}>
                <p>{location}</p>
                </div>
                <div className={Styles.cardButton}>
                <button>More info</button>
                </div>


            </div>
        </div>
        
    )

}