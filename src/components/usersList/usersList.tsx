import { UserDataType } from '../../types/userDataType';
import UserItem from '../userItem/userItem';
import styles from './usersList.module.scss'

type Props = {
    isUpdate: boolean;
    users: UserDataType[];
}

export default function UsersList({isUpdate, users}: Props) {
    return(
        <ul className={styles.usersList}>
            {users.map((user) => (
                <li>
                    <UserItem isUpdate={isUpdate} user={user}/>
                </li>            
            ))}
        </ul>

    )
}