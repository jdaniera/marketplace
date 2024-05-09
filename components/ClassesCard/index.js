import React from "react";
import Styles from './ClassesCard.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function ClassesCard({title, subtitle, image, alt, link, buttonText, query}) {
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
                <div className={Styles.cardSubtitle}>
                    <p>{subtitle}</p>
                </div>
                <div className={Styles.cardButton}>
                    <Link
                        href={{
                            pathname: link,
                            query: query || {}
                        }}>
                        <button>{buttonText}</button>
                    </Link>
                </div>
            </div>
        </div>
        
    ) 

}