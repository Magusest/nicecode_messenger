import { UserDataType } from '../../types/userDataType';
import CustomCheckbox from '../customCheckbox/customCheckbox';
import styles from './userItem.module.scss'


type Props = {
    isUpdate: boolean;
    user: UserDataType;
}

export default function UserItem({isUpdate, user}: Props) {
    const {name, photo} = user;

    return(
        <div className={`${styles.userItem} ${!isUpdate ? styles.activeUserItem : null}`}>
            {!isUpdate ? <CustomCheckbox /> : null}
            <h3>{name}</h3>
            <img src={photo} alt=" Фото пользователя " />
        </div>
    )
}