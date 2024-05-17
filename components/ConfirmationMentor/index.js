// import Link from 'next/link';
// import styles from './Confirmation.module.css';
// import Image from 'next/image';


// export default function ConfirmationMentor({name}) {
//     return(
//         <>
//             <div className={styles.overlay}>
//                 <div className={styles.checkmark}>
//                     <Image src="/images/confirmation/checkmarkConfirmation.svg" width={130} height={130} alt="Checkmark"/>
//                 </div>
//                 <div className={styles.title}>
//                     <h1>Your request has been received!</h1>
//                 </div>
//                 <div className={styles.body}>
//                     <p>{name} will review your application and you will be notified when accepted</p>
//                 </div>
//                 <div className={styles.buttonContainer}>
//                     <Link href="/">
//                     <button className={styles.button}>Great!</button>
//                     </Link>
//                 </div>
//             </div>
//         </>
//     )
// }