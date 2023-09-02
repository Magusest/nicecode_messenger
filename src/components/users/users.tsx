import { useState } from 'react'
import { UserDataType } from '../../types/userDataType';
import CustomCheckbox from '../customCheckbox/customCheckbox';
import UsersList from '../usersList/usersList';
// import UserListControl from '../userListControl/userListControl';
import styles from './users.module.scss'

type Props = {
    users: UserDataType[];
}

export default function Users({users}: Props) {
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
                <UsersList isUpdate={isUpdate} users={users} />
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
            <UsersList isUpdate={isUpdate} users={users}/>
        </>
    )
}