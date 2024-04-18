import styles from './HomeMap.module.css';
import Image from 'next/image';

export default function HomeMap() {
    return (
        <div className={styles.mapContainer}>
            <div className={styles.mapInnerContainer}>
             <div><p>Happening Near You</p></div>
             <div><p>Tap a pin to learn more!</p></div>
             <Image src="/images/map.png" alt="map" width={375} height={375}/>
            </div>
        </div>
 );
}