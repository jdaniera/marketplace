import Head from 'next/head';
import styles from '@/styles/BookService.module.css';
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import Calender from '@/components/Calender';
import ButtonBox from '@/components/ButtonBox';

export default function BookService() {

  const headerTitle = 'Booking';
  const pageLayout = 'layout1';
  const backButton = true;
  const searchBar = true;
  const settings = true;

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
                <div className={styles.pageTitles}>
                    <p>Please fill out the following</p>
                </div>
                <div className={styles.pageSubTitles}>
                    <p>Select a Date and Time:</p>
                </div>
                <div className={styles.datePicker}>
                    <input className={styles.timePicker} type="time" id="date" name="date" />
                </div>
                <div className={styles.calender}>
                    <Calender/>
                </div>
                <div className={styles.spacingLineContainer}>
                <div className={styles.spacingLine}></div>
                </div>
                <div className={styles.detailsTitle}>
                    <p>Describe Issue:</p>
                </div>
                <div className={styles.describeContainer}>
                    <input className={styles.describe} type='text' placeholder="Describe your issue in detail"></input>
                </div>
                <div className={styles.bookButton}>
                    <ButtonBox buttonText="Book Now" link="/BookingPayment" />
                </div>
            </div>
        </main>
      </div>
    </>
  )
}
