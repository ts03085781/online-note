import styles from "./Header.module.scss";

const Header = (props) => {
    const { clickHamburgerButton } = props;
    return (
        <header className={styles.header}>
            <div
                className={styles.hamburgerButton}
                onClick={clickHamburgerButton}
            >
                <div />
                <div />
                <div />
            </div>
            <h1>Online Note</h1>
        </header>
    );
};

export default Header;
