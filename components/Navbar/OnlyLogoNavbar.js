import Link from "next/link";
import styles from "./OnlyLogoNavbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <img
                    src="/logo/favicon.ico"
                    width={32}
                    height={32}
                />
            </Link>
        </nav>
    );
}