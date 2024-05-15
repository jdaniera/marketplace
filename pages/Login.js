import styles from '@/styles/Login.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
    return(
        <>
            <div className={styles.iphoneFrame}>
                <main className={styles.main}>
                    <div className={styles.logoContainer}>
                        <Image src="./images/Landing/wordmark.svg" alt="logo" width={412} height={83} />
                    </div>
                    <div className={styles.cardBackground}>
                        <div className={styles.innerContainer}>
                            <h2>Login</h2>
                            <div className={styles.inputField}>
                                <div className={styles.inputWrapper}>
                                    <Image src="./images/signinIcons/mail.svg" alt="user" width={22.5} height={18} />
                                    <p>Username</p>
                                    <input type="text" placeholder="Enter Username or Email" />
                                </div>
                            </div>
                            <div className={styles.inputField}>
                                <div className={styles.inputWrapper}>
                                    <Image src="./images/signinIcons/lock.svg" alt="user" width={22.5} height={18} />
                                    <p>Password</p>
                                    <input type="text" placeholder="Enter Passworrd" />
                                </div>
                            </div>
                            <div className={styles.underContainer}>
                                <input type="checkbox"/>
                                <p>Remember Me</p>
                                <p className={styles.text2}>Forgot Password</p>
                            </div>
                            <Link href="/">
                            <button>Login</button>
                            </Link>
                            <p>Dont have an account? <Link href="/Signup-1">Sign up here</Link></p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}