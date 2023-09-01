import CustomCheckbox from "../customCheckbox/customCheckbox";
import styles from './userListControl.module.scss'


type Props = {
    status: boolean;
}

export default function UserListControl({status}: Props) {
    if (!status) {
        return(
            <div className={`${styles.control} ${styles.activeControl}`}>
                <div className={styles.counterSection}>
                    <CustomCheckbox />
                    <button className={styles.button}>Все</button>
                    <div className={styles.counter}>
                        <p>200</p>
                    </div>
                </div>
                <div className={styles.buttonSection}>
                    <button className={styles.button}>Действие</button>
                    <button className={styles.button} onClick={()=> status = true}>Отмена</button>
                </div>
            </div>
        )
    }

    return(
        <div className={styles.control}>
            <div className={styles.counter}>
                <p>200</p>
            </div>
            <button className={styles.button} onClick={()=> status = false}>Выбрать</button>
        </div>
    )

}