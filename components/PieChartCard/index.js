import PieChart from '/components/PieChart';
import styles from './PieChartCard.module.css';
import Image from 'next/image';


export default function PieChartCard() {
    return(
        <>
            <div className={styles.statsContainer}>
            <div className={styles.statsHeader}>
            <h2>Dont miss out on opportunity!</h2>
            <p>Canadians love providing their services online. See trending services below</p>
            </div>
              <div className={styles.statsInnerContainer}>
              <h3>Gig Workers Statistics <span className={styles.titleGrey}>(Canada)</span></h3>
                <div className={styles.pieChartContainer}>
                <PieChart/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoInnerContainer}>
                        <div className={styles.info}>
                        <div className={styles.colorBox1}>                                
                        <Image
                                    src='/images/pieCard/circle1.svg'
                                    alt='back button'
                                    width={22}
                                    height={22}
                        />            
                        </div>
                        <p>Total providers</p>
                        </div>
                        <div className={styles.info}>
                        <div className={styles.colorBox2}>
                        <Image
                                    src='/images/pieCard/circle2.svg'
                                    alt='back button'
                                    width={22}
                                    height={22}
                        />                                 
                        </div>
                        <p>Delivery services</p>
                        </div>
                        <div className={styles.info}>
                        <div className={styles.colorBox3}>
                        <Image
                                    src='/images/pieCard/circle3.svg'
                                    alt='back button'
                                    width={22}
                                    height={22}
                        />      
                        </div>
                        <p>Personal transport services</p>
                        </div>
                        <div className={styles.info}>
                        <div className={styles.colorBox3}>
                        <Image
                                    src='/images/pieCard/circle4.svg'
                                    alt='back button'
                                    width={22}
                                    height={22}
                        />      
                        </div>
                        <p>Selling of Goods</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
}
