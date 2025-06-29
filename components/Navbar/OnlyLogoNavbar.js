import Link from "next/link";
import styles from "./OnlyLogoNavbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <img className={styles.logo}/>
            </Link>
        </nav>
    );
}