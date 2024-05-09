import styles from './ButtonMedium.module.css'

export default function ButtonMedium( buttonText ) {
    return(
        <button className={styles.buttonContainer}>{buttonText}</button>
    )
}