import { useState } from "react";
import { UserDataType } from "../../types/userDataType";
import CustomCheckbox from "../customCheckbox/customCheckbox";
import UserItem from "../userItem/userItem";
import styles from './usersList.module.scss'


type Props = {
    users: UserDataType[];
    currentId: number;
    changeUserCard: (id: number) => void;
}

export default function UsersList({users, currentId, changeUserCard}: Props) {
    const [isUpdate, setISUpdate] = useState(true);

    if (!isUpdate) {
        return(
            <>
                <div className={`${styles.control} ${styles.activeControl}`}>
                    <div className={styles.counterSection}>
                        <CustomCheckbox />
                        <button className={styles.button}>Все</button>
                        <div className={styles.counter}>
                            <p>{users.length}</p>
                        </div>
                    </div>
                    <div className={styles.buttonSection}>
                        <button className={styles.button}>Действие</button>
                        <button className={styles.button} onClick={()=> setISUpdate(true)}>Отмена</button>
                    </div>
                </div>
                <ul className={styles.usersList}>
                    {users.map((user) => (
                        <li>
                            <UserItem isUpdate={isUpdate} user={user} currentId={currentId} changeUserId={changeUserCard}/>
                        </li>            
                    ))}
                </ul>
            </>
        
        )
    }

    return(
        <>
            <div className={styles.control}>
                <div className={styles.counter}>
                    <p>{users.length}</p>
                </div>
                <button className={styles.button} onClick={()=> setISUpdate(false)}>Выбрать</button>
            </div>
            <ul className={styles.usersList}>
                    {users.map((user) => (
                        <li>
                            <UserItem isUpdate={isUpdate} user={user} currentId={currentId} changeUserId={changeUserCard}/>
                        </li>            
                    ))}
                </ul>
        </>
    )
} 