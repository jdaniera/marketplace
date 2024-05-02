"use client";
import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NavBar({ title, subtitle, layout, backButton, searchBar, settings }) {

    const router = useRouter();

    return (
        <div className={styles.navContainer}>
            <div className={styles[layout]}>
                <div className={styles.headerTitle}>
                <h1>{title}</h1>
                </div>
                {subtitle && <h2>{subtitle}</h2>}

                <div className={styles.buttonsContainer}>
                    {backButton !== false && (
                        <div>
                            <button onClick={router.back} className={styles.backButton}>
                                <Image
                                    src='/images/tabButtons/back-arrow.svg'
                                    alt='back button'
                                    width={30}
                                    height={26}
                                />                  
                            </button>
                        </div>
                    )}
                    {searchBar !== false && (
                            <div className={styles.searchbarContainer}>
                                <input type="text" 
                                    placeholder='Search for ...'
                                    className={styles.searchBar}
                                    />
                            </div>
                    )}
                    {settings !== false && (
                        <div>
                            <button className={styles.settingsButton}>
                                <Link href="/settings" passHref>
                                    <Image
                                        src='/images/tabButtons/settings.svg'
                                        alt='settings button'
                                        width={35}
                                        height={35}
                                    />
                                </Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        
    )
}