import styles from './SideBar.module.scss';

const SideBar = (props) => {
    const { show, whenClickLogOut } = props;

    return (
        <ul className={`${styles.sideBar} ${show ? '' : styles.hide}`}>
            <li>Sort</li>
            <li onClick={whenClickLogOut}>Log out</li>
            <li>Setting</li>
        </ul>
    );
};

export default SideBar;
