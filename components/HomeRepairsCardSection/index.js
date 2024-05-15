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
                        name='James Plunk'
                        rating="★★★★☆"
                        profession="Plumber"
                        price="$20 / hour"
                        id='jamesPlunk'
                        />
                    </Link>
                </div>
                <div className={styles.repairsCard}>
                    <HomeRepairsCard
                    image='/images/homeRepairs/painting.svg'
                    profilePic='images/homeRepairs/tiffany.svg'
                    name='Tiffany Sprout'
                    rating="★★★★★"
                    profession="Painter"
                    price="$17 / hour"
                    id='tiffanySprout'
                    />
                </div>
                <div className={styles.repairsCard}>
                    <HomeRepairsCard
                    image='/images/homeRepairs/drywaller.svg'
                    profilePic='images/homeRepairs/dario.svg'
                    name='Dario Romano'
                    rating="★★★★☆"
                    profession="Drywaller"
                    price="$27 / hour"
                    id='darioRomano'
                    />
                </div>
                <div className={styles.repairsCard}>
                    <HomeRepairsCard
                    image='/images/homeRepairs/electrician.svg'
                    profilePic='images/homeRepairs/chrisSpark.svg'
                    name='Christopher Spark'
                    rating="★★★☆☆"
                    profession="Electrician"
                    price="$25 / hour"
                    id='chrisSpark'
                    />
                </div>
                <div className={styles.repairsCard}>
                    <HomeRepairsCard
                    image='/images/homeRepairs/handyman.svg'
                    profilePic='images/homeRepairs/jose.svg'
                    name='Jose Dominguez'
                    rating="★★★☆☆"
                    profession="Handyman"
                    price="$20 / hour"
                    id='joseDominguez'
                    />
                </div>
            </div>
        </>
    )
}