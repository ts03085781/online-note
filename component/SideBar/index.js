import styles from "./SideBar.module.scss";

const SideBar = (props) => {
    const { show, clickLogOut } = props;

    return (
        <ul className={`${styles.sideBar} ${show ? "" : styles.hide}`}>
            <li>Sort</li>
            <li onClick={clickLogOut}>Log out</li>
            <li>Setting</li>
        </ul>
    );
};

export default SideBar;
