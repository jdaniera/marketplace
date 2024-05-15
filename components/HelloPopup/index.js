import styles from './HelloPopup.module.css';
import { motion } from 'framer-motion';

export default function HelloPopup() {
    return(
      <>
      <div className={styles.overlay}>
        <motion.div 
          className={styles.iphoneFrame}
          animate={{ height: '136px', y: -430 }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut"}}
        >
          <motion.div 
            className={styles.mainText}
            initial={{ y: 0 }}
            animate={{ y: -364 }} 
            transition={{ duration: 1, delay: 1, ease: "easeInOut"}}
          >
            <h1>Welcome, Jalen!</h1>
          </motion.div>
        </motion.div>
        </div>
      </>
    )
  }