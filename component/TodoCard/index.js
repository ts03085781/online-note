import styles from "./TodoCard.module.scss";

const TodoCard = ({ todoText, title }) => {
    return (
        <div className={styles.todoCard}>
            <span className={`material-icons ${styles.delete}`}>delete</span>
            <span className={`material-icons ${styles.edit}`}>edit</span>
            <p>{title}</p>
            <span className={styles.text}>{todoText}</span>
        </div>
    );
};

export default TodoCard;
