import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar({ title, subtitle, layout, backButton, searchBar, settings }) {

    return (
        <div className={styles.navContainer}>
            <div className={styles[layout]}>
                <h1>{title}</h1>
                {subtitle && <h2>{subtitle}</h2>}

                <div className={styles.buttonsContainer}>
                    {backButton && (
                        <div>
                            <Image
                                src='/images/tabButtons/back-arrow.svg'
                                alt='back button'
                                width={30}
                                height={26}
                                className={styles.backButton}
                            />
                        </div>
                    )}
                    {searchBar && (
                        <div className="searchBar">
                            <input type="text" placeholder='Search for ...'/>
                        </div>
                    ) }
                    {settings && (
                        <div>
                            <Image
                                src='/images/tabButtons/settings.svg'
                                alt='settings button'
                                width={35}
                                height={35}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
        
    )
}