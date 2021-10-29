import styles from './loginBlock.module.scss';
import { useEffect, useState } from 'react';

const LoginBlock = (props) => {
    const { whenLoginSuccess } = props;
    const [userId, setUserId] = useState(''); //ID輸入框內容
    const [password, setPassword] = useState(''); //password輸入框內容
    const [userIdWarn, setUserIdWarn] = useState(false); //控制ID錯誤訊息
    const [passwordWarn, setPasswordWarn] = useState(false); //控制password錯誤訊息

    //點擊登入
    const handleSubmit = async () => {
        if (checkInputValue()) {
            const apiData = await fetchLoginApi();
            if (apiData.login) {
                localStorage.setItem('onlineNote', JSON.stringify(apiData));
                whenLoginSuccess();
            } else {
                alert('請輸入正確帳號密碼');
            }
        }
    };

    //call登入API,返回回傳值
    const fetchLoginApi = async () => {
        const apiUrl = `http://${process.env.IP}:${process.env.HOST}/api/login`;
        const apiTemplate = {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: userId,
                password: password,
            }),
        };
        const res = await fetch(apiUrl, apiTemplate);
        const data = await res.json();
        return data;
    };

    //檢查input有無輸入,會回傳true & false 表示否有成功
    const checkInputValue = () => {
        userId === '' && setUserIdWarn(true);
        password === '' && setPasswordWarn(true);
        return userId === '' || password === '' ? false : true;
    };

    //輸入ID時
    const userIdOnChange = (e) => {
        //replace只可輸入英文數字
        setUserId(e.target.value.replace(/[\W]/g, ''));
        //關閉ID警示
        setUserIdWarn(false);
    };

    //輸入密碼時
    const userPassWordOnChange = (e) => {
        //replace只可輸入英文數字
        setPassword(e.target.value.replace(/[\W]/g, ''));
        //關閉密碼警示
        setPasswordWarn(false);
    };

    return (
        <div className={styles.login}>
            <div>
                <h1>Online Note</h1>
                <input
                    type='text'
                    placeholder='User Id :'
                    value={userId}
                    onChange={(e) => {
                        userIdOnChange(e);
                    }}
                />
                {userIdWarn && <span className={styles.warn}>請輸入帳號</span>}
                <input
                    type='password'
                    placeholder='Password :'
                    value={password}
                    onChange={(e) => {
                        userPassWordOnChange(e);
                    }}
                />
                {passwordWarn && <span className={styles.warn}>請輸入密碼</span>}
                <button onClick={handleSubmit}>Log in</button>
                <div>
                    <button className={styles.forgot}>Forgot</button>
                    <button className={styles.create}>Create</button>
                </div>
            </div>
        </div>
    );
};

export default LoginBlock;
