import styles from "../styles/logIn.module.scss";

const logIn = () => {
    return (
        <div className={styles.logIn}>
            <div>
                <span>Online Note</span>
                <input type="text" placeholder="Account :" />
                <input type="password" placeholder="Password :" />
                <button className={styles.logInBtn}>Log in</button>
                <div>
                    <button className={styles.forgot}>Forgot</button>
                    <button className={styles.create}>Create</button>
                </div>
            </div>
        </div>
    );
};

export default logIn;
