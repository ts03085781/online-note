import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoCard from '../components/TodoCard';
import AddListBlock from '../components/AddListBlock';
import SideBar from '../components/SideBar';
import LoginBlock from '../components/LoginBlock';
import { useEffect, useState } from 'react';

const Home = (props) => {
    const { listData } = props;
    const [showSideBar, setShowSideBar] = useState(false); //測邊欄顯示
    const [logIn, setLogIn] = useState(false); //登入卡片欄顯示

    //觸發測邊欄顯示
    const clickHamburgerButton = () => {
        setShowSideBar(!showSideBar);
    };

    //當點擊登入按鈕成功登入時
    const whenLoginSuccess = () => {
        setLogIn(true);
    };

    //當點擊側邊攔登出紐;
    const whenClickLogOut = () => {
        const localItem = JSON.parse(localStorage.getItem('onlineNote'));
        const newItem = { ...localItem, login: false };
        localStorage.setItem('onlineNote', JSON.stringify(newItem));
        setLogIn(false);
    };

    useEffect(() => {
        //鑒察是否為登入狀態
        const login = !!JSON.parse(localStorage.getItem('onlineNote'))?.login;
        setLogIn(login);
    });

    return logIn ? (
        <div className={styles.home}>
            <Header clickHamburgerButton={clickHamburgerButton} />
            <main className={styles.main}>
                <AddListBlock />
                {listData.map((item, index) => (
                    <TodoCard key={item.title} title={item.title} todoText={item.content} />
                ))}
            </main>
            <Footer />
            <SideBar show={showSideBar} whenClickLogOut={whenClickLogOut} />
        </div>
    ) : (
        <LoginBlock whenLoginSuccess={whenLoginSuccess} />
    );
};

export default Home;

export const getStaticProps = async (context) => {
    const res = await fetch(`http://${process.env.IP}:${process.env.HOST}/api/list/get`);
    const data = await res.json();

    return {
        props: {
            listData: data,
        },
    };
};
