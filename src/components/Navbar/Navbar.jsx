import Links from "./Links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>monter</div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar