import styles from "./SideBar.module.scss";

const SideBar = () => {
    return (
        <ul className={styles.sideBar}>
            <li>Sort</li>
            <li>Log out</li>
            <li>Setting</li>
        </ul>
    );
};

export default SideBar;
