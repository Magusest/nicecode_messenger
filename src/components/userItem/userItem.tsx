import { UserDataType } from '../../types/userDataType';
import CustomCheckbox from '../customCheckbox/customCheckbox';
import styles from './userItem.module.scss'


type Props = {
    isUpdate: boolean;
    user: UserDataType;
    currentId: number;
    changeUserId: (id: number) => void;
}

export default function UserItem({isUpdate, user, currentId, changeUserId}: Props) {
    const {name, photo, id} = user;

    return(
        <div 
            className={`
                ${styles.userItem}
                ${!isUpdate ? styles.activeUserItem : null}
                ${currentId === id ? styles.currentUserItem : null}
            `}
            onClick={() => changeUserId(id)}
        >
            {!isUpdate ? <CustomCheckbox /> : null}
            <h3>{name}</h3>
            <img src={photo} alt=" Фото пользователя " />
        </div>
    )
}