import React from 'react';
import Styles from './ClassesCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SavedButton from '../SavedButton';

export default function ClassesCard({ title, subtitle, image, alt, link, buttonText, query, id }) {
  return (
    <div className={Styles.classesCardContainer}>
      <div className={Styles.classesCardInnerContainer}>
        <div className={Styles.imageContainer}>
          <Image src={image} alt={alt} width={191} height={168} />
        </div>
        <div className={Styles.cardHeader}>
          <p>{title}</p>
          <SavedButton 
            title={title}
            subtitle={subtitle}
            image={image}
            alt={alt}
            link={link}
            buttonText={buttonText}
            query={query}
            id={id}
          />
        </div>
        <div className={Styles.cardSubtitle}>
          <p>{subtitle}</p>
        </div>
        <div className={Styles.cardButton}>
          <Link href={{ pathname: link, query: query || {} }}>
            <button>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}