import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <address>
                <div>
                    <b>Author</b>
                    <b>:</b>
                    <span>Lai-Yi-Lin</span>
                </div>
                <div>
                    <b>FaceBook</b>
                    <b>:</b>
                    <a
                        href={"https://www.facebook.com/lai.yi.lin.1103"}
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://www.facebook.com/lai.yi.lin.1103
                    </a>
                </div>
                <div>
                    <span className={`material-icons ${styles.icon}`}>
                        email
                    </span>
                    <b>:</b>
                    <span>ts03085781@gmail.com</span>
                </div>
                <div>
                    <span className={`material-icons ${styles.icon}`}>
                        smartphone
                    </span>
                    <b>:</b>
                    <span>0960-081-103</span>
                </div>
            </address>
        </footer>
    );
};

export default Footer;
