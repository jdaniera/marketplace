import styles from './NavBar.module.css'

export default function NavBar({ title, subtitle, layout, searchBar }) {

    return (
        <div className={`${styles.nav} ${styles[layout]}`}>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            {searchBar && (
                <div className="searchBar">
                    <input type="text" placeholder='Search for ...'/>
                </div>
            ) }
        </div>
    )
}