import { useState } from "react";
import { UserDataType } from "../../types/userDataType";
import CustomCheckbox from "../customCheckbox/customCheckbox";
import PatientItem from "../patientItem/patientItem";
import styles from './patientsList.module.scss'


type Props = {
    patients: UserDataType[];
    currentId: string;
    changeUserCard: (id: string) => void;
}

export default function PatientList({patients, currentId, changeUserCard}: Props) {
    const [isUpdate, setISUpdate] = useState(true);

    if (!isUpdate) {
        return(
            <>
                <div className={`${styles.control} ${styles.activeControl}`}>
                    <div className={styles.counterSection}>
                        <CustomCheckbox />
                        <button className={styles.button}>Все</button>
                        <div className={styles.counter}>
                            <p>{patients.length}</p>
                        </div>
                    </div>
                    <div className={styles.buttonSection}>
                        <button className={styles.button}>Действие</button>
                        <button className={styles.button} onClick={()=> setISUpdate(true)}>Отмена</button>
                    </div>
                </div>
                <ul className={styles.usersList}>
                    {patients.map((patient, index) => (
                        <li key={`${patient.id}-${index}`}>
                            <PatientItem isUpdate={isUpdate} patient={patient} currentId={currentId} changeUserId={changeUserCard}/>
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
                    <p>{patients.length}</p>
                </div>
                <button className={styles.button} onClick={()=> setISUpdate(false)}>Выбрать</button>
            </div>
            <ul className={styles.usersList}>
                    {patients.map((patient, index) => (
                        <li key={`${patient.id}-${index}`}>
                            <PatientItem isUpdate={isUpdate} patient={patient} currentId={currentId} changeUserId={changeUserCard}/>
                        </li>            
                    ))}
                </ul>
        </>
    )
} 