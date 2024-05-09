import React from "react";
import Styles from './ServiceCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SavedButton from "../SavedButton";

export default function ClassesCard({title, subtitle, image, alt, link, buttonText, query, prompt}) {
    return(
        <div className={Styles.classesCardContainer}>
            <div className={Styles.classesCardInnerContainer}>
                <div className={Styles.imageContainer}>
                    <Image src={image} alt={alt} width={191} height={168}/>
                </div>
                <div className={Styles.cardHeader}>
                    <p>{title}</p>
                    <SavedButton prompt={prompt}/>

                    {/* <Image src="/images/classesFeaturedCard/heartIcon.svg" width={16.7} height={15.5} alt="Heart Icon" />                 */}
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