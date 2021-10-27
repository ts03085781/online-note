import styles from "../styles/Home.module.scss";
import Header from "../component/Header";
import Footer from "../component/Footer";
import TodoCard from "../component/TodoCard";
import AddListBlock from "../component/AddListBlock";
import SideBar from "../component/SideBar";

const Home = () => {
    const aaaa =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
    return (
        <div className={styles.home}>
            <Header />
            <main className={styles.main}>
                <AddListBlock />
                <TodoCard title={"title"} todoText={aaaa} />
                <TodoCard title={"title"} todoText={aaaa} />
            </main>
            <Footer />
            <SideBar />
        </div>
    );
};

export default Home;
