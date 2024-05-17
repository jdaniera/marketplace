import Link from 'next/link';
import styles from './Confirmation.module.css';
import Image from 'next/image';


export default function Confirmation({name, header}) {
    return(
        <>
            <div className={styles.overlay}>
                <div className={styles.checkmark}>
                    <Image src="/images/confirmation/checkmarkConfirmation.png" width={220} height={220} alt="Checkmark"/>
                </div>
                <div className={styles.title}>
                    <h1>{header}Your request has been received!</h1>
                </div>
                <div className={styles.body}>
                    <p>{name} will review your booking request and you will be notified when accepted</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Link href="/">
                    <button className={styles.button}>Great!</button>
                    </Link>
                </div>
            </div>
        </>
    )
}