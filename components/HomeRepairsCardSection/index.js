import HomeRepairsCard from '/components/HomeRepairsCard';
import styles from './HomeRepairsCardSection.module.css';
import Link from 'next/link';
import React from 'react';

export default function HomeRepairsCardSection() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.repairsCard}>
                    <Link className={styles.linkedPage} href="/JamesPlunk">
                        <HomeRepairsCard
                        image='/images/homeRepairs/bathtub.svg'
                        profilePic='images/homeRepairs/jamesPlunk.svg'
                        alt='service person'
                        name='James Plunk'
                        rating="★★★★☆"
                        profession="Plumber"
                        price="$20 / hour"
                        id='jamesPlunk'
                        type='service'
                        />
                    </Link>
                </div>
                <div className={styles.repairsCard}>
                    <HomeRepairsCard
                    image='/images/homeRepairs/painting.svg'
                    profilePic='images/homeRepairs/tiffany.svg'
                    alt='service person'
                    name='Tiffany Sprout'
                    rating="★★★★★"
                    profession="Painter"
                    price="$17 / hour"
                    id='tiffanySprout'
                    type='service'
                    />
                </div>
                <div className={styles.repairsCard}>
                    <HomeRepairsCard
                    image='/images/homeRepairs/drywaller.svg'
                    profilePic='images/homeRepairs/dario.svg'
                    alt='service person'
                    name='Dario Romano'
                    rating="★★★★☆"
                    profession="Drywaller"
                    price="$27 / hour"
                    id='darioRomano'
                    type='service'
                    />
                </div>
                <div className={styles.repairsCard}>
                    <HomeRepairsCard
                    image='/images/homeRepairs/electrician.svg'
                    profilePic='images/homeRepairs/chrisSpark.svg'
                    alt='service person'
                    name='Christopher Spark'
                    rating="★★★☆☆"
                    profession="Electrician"
                    price="$25 / hour"
                    id='chrisSpark'
                    type='service'
                    />
                </div>
                <div className={styles.repairsCard}>
                    <HomeRepairsCard
                    image='/images/homeRepairs/handyman.svg'
                    profilePic='images/homeRepairs/jose.svg'
                    alt='service person'
                    name='Jose Dominguez'
                    rating="★★★☆☆"
                    profession="Handyman"
                    price="$20 / hour"
                    id='joseDominguez'
                    type='service'
                    />
                </div>
            </div>
        </>
    )
}