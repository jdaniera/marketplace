import Head from 'next/head';
import styles from '@/styles/BookingPayment.module.css';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import Image from 'next/image';
import Confirmation from '@/components/Confirmation';
import { useState } from 'react';

export default function BookingPaymentClasses() {

  const [showConfirmation, setShowConfirmation] = useState(false);
  const headerTitle = 'Booking';
  const pageLayout = 'layout1';
  const backButton = true;
  const searchBar = true;
  const settings = true;

  const handlePayNowClick = () => {
    const audio = new Audio('/audio/confirmation-sound.mp3');
    audio.play();
    setShowConfirmation(true);
  };

  return (
    <>
      <Head>
        <title>Booking</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.iphoneFrame}>
        <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} />
        <main className={`${styles.main}`}>
            <div className={styles.mainInnerContainer}>

                <div className={styles.pageHeader}><p>Book Now</p></div>
                <div className={styles.editButton}><p>Edit</p></div>
                <div className={styles.profileContianer}>
                    <div className={styles.profileInnerContainer}>
                        <div className={styles.pfp}><Image src="/images/bookingPaymentImages/jalenPFP.svg" alt="Jalen smith pfp" width={58} height={58} /></div>
                        <div className={styles.name}><p>Jalen Smith</p></div>
                    </div>
                </div>  

                <div className={styles.plumbingServiceContainer}>
                    <p className={styles.serviceTitle}>Pottery Class</p>
                    <div className={styles.plumbingServiceInnerContainer}>
                        <div className={styles.group1}>
                            <p>September 10th, 2024</p>
                            <p><span className={styles.spanLighterGrey}>10:00 Am - 1:00 PM</span></p>
                        </div>
                        <div className={styles.lastLine}>
                        <p>West 4th street, Vancouver, B.C, V5L 3H7<span className={styles.price}>$60.00</span></p>
                        </div>
                    </div>
                </div>

                    <div className={styles.paymentHeader}>
                        <p>Payment<span className={styles.editAddButton2}> Add / Edit</span></p>
                    </div>
                    <div className={styles.cardInfo}>
                    <div className={styles.addingCard}>
                        <div><Image src="/images/bookingPaymentImages/cardIcon.svg" alt="Add card icon" width={24} height={26} /></div>
                        <div><p>Add Credit / Debit Card</p></div>
                    </div>
                    <div className={styles.cardInfoContainer}>
                        <div className={styles.group2}>
                            <p><span className={styles.spanLighterGrey2}>Card Holder's Name</span></p>
                            <p>Jalen Smith</p>
                        </div>
                        <div className={styles.group2}>
                            <p><span className={styles.spanLighterGrey2}>Card Number</span></p>
                            <p>4502 9983 5174 4576</p>
                        </div>
                        <div className={styles.expiryDateHeader}>
                            <p>Expiry Date</p>
                        </div>
                        <div className={styles.expiryDate}>
                            <p><span className={styles.spanLighterGrey2}>Month</span></p>
                            <p><span className={styles.spanLighterGrey2}>Year</span></p>
                            <p>12</p>
                            <p>25</p>
                        </div>
                        <div className={styles.cvvContainer}>
                            <p className={styles.cvv}><span className={styles.spanLighterGrey2}>Security Code (CVV)</span></p>
                            <p>561</p>
                            <Image/>
                        </div>
                    </div>
                    <div className={styles.lineSpacer}></div>
                    <div className={styles.rememberCard}>
                        <input type="checkbox" id="saveCard" name="saveCard" value="saveCard"/>
                        <p>Remember card for future purchases</p>
                    </div>
                </div>
                <div className={styles.payButtonContainer}>
                <p className={styles.payButton} onClick={handlePayNowClick}>Pay Now</p>
                    </div>
                    {showConfirmation && <Confirmation className={showConfirmation ? 'confirmation show' : 'confirmation'} />}
            </div>
        </main>
        <TabBar/>
      </div>
    </>
  )
}
