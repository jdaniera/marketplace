import styles from './ButtonSmall.module.css'

export default function ButtonSmall( buttonText ) {
    return(
        <button className={styles.buttonContainer}>{buttonText}</button>
    )
}