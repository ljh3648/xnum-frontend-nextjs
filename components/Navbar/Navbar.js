import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <img
                    src="/logo/favicon.ico"
                    className={styles.logo}
                    width={32}
                    height={32}
                />
            </Link>
            {/* <Link className={styles.link} href="/">HOME</Link> */}
            <Link className={styles.link} href="/user/card/1/1">UserCard</Link>
        </nav>
    );
}