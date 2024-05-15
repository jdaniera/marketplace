import styles from '@/styles/Landing.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
    return(
        <>
            <div className={styles.iphoneFrame}>
                <main className={styles.main}>
                    <div className={styles.logoContainer}>
                        <Image src="./images/Landing/wordmark.svg" alt="logo" width={412} height={83} />
                    </div>
                    <div className={styles.cardBackground}>
                        <div className={styles.innerContainer}>
                            <h2>Sign-up or Log in</h2>
                            <Link href="/Signup-1">
                            <button>Sign Up Now!</button>
                            </Link>
                            <p className={styles.text1}>Already have an account?</p>
                            <Link href="/Login">
                            <button>Login</button>
                            </Link>
                            <div className={styles.orContainer}>
                                <p>or</p>
                            </div>
                            <p>Continue with</p>
                            <div className={styles.signinIcons}>
                                <Image className={styles.icon} src="./images/signInIcons/google.svg" alt="google" width={26} height={26} />
                                <Image className={styles.icon} src="./images/signInIcons/apple.svg" alt="apple" width={26} height={26} />
                                <Image className={styles.icon} src="./images/signInIcons/facebook.svg" alt="facebook" width={26} height={26} />
                            </div> 
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}