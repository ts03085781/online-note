import styles from "./AddListBlock.module.scss";

const AddListBlock = ({ todoText, title }) => {
    return (
        <div className={styles.addListBlock}>
            <div>
                <input type="text" placeholder="Title" />
                <button>Add Todo</button>
            </div>
            <textarea cols="30" rows="10" placeholder="Content" />
        </div>
    );
};

export default AddListBlock;
