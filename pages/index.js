import styles from "../styles/Home.module.scss";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TodoCard from "../component/TodoCard";
import AddListBlock from "../component/AddListBlock";
import SideBar from "../component/SideBar";
import { useEffect, useState } from "react";

const Home = (props) => {
    const [showSideBar, setShowSideBar] = useState(false); //測邊欄顯示

    //觸發測邊欄顯示
    const clickHamburgerButton = () => {
        setShowSideBar(!showSideBar);
    };

    return (
        <div className={styles.home}>
            <Header clickHamburgerButton={clickHamburgerButton} />
            <main className={styles.main}>
                <AddListBlock />
                <TodoCard
                    title={"title"}
                    todoText={
                        "Lorem Ipsum is simply dummy text of the printing"
                    }
                />
            </main>
            <Footer />
            <SideBar show={showSideBar} clickLogOut={() => {}} />
        </div>
    );
};

export default Home;

export const getStaticProps = async (context) => {
    const url = `http://${process.env.IP}:${process.env.HOST}/api/hello`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("data:", data);

    return {
        props: {
            ...data,
        },
    };
};
