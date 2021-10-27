import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.hamburgerButton}>
                <div />
                <div />
                <div />
            </div>
            <h1>Online Note</h1>
        </header>
    );
};

export default Header;
