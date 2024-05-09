import styles from './ButtonBox.module.css'
import Link from 'next/link'

export default function ButtonBox( {buttonText, link, query} ) {
    return(
       <div className={styles.buttonContainer}>
            <Link
                href={{
                    pathname: link,
                    query: query || {}
                }}
            >
                <button>{buttonText}</button>
            </Link>
       </div>
    )
}