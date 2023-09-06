import { UserDataType } from '../../types/userDataType';
import CustomCheckbox from '../customCheckbox/customCheckbox';
import styles from './patientItem.module.scss'


type Props = {
    isUpdate: boolean;
    patient: UserDataType;
    currentId: string;
    changeUserId: (id: string) => void;
}

export default function PatientItem({isUpdate, patient, currentId, changeUserId}: Props) {
    const {name, photo, id, isNewSessions} = patient;

    return(
        <div 
            className={`
                ${styles.patientItem}
                ${isNewSessions ? styles.newSession : null}
                ${!isUpdate ? styles.activePatientItem : null}
                ${currentId === id ? styles.currentPatientItem : null}
            `}
            onClick={() => changeUserId(id)}
        >
            {!isUpdate ? <CustomCheckbox /> : null}
            <h3>{name}</h3>
            <img src={photo} alt={`Фото пользователя ${name}`} />
            {isNewSessions ? <img className={styles.newSessionImage} src='../assets/icons/newSessions.svg' alt='иконка новой сессии' /> : null}
        </div>
    )
}