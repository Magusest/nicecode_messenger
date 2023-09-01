import { useState } from "react";
import { UserDataType } from "../../types/userDataType"
import styles from './patientInfo.module.scss'

type Props = {
    patient: UserDataType;
}

export default function PatientInfo({patient}: Props) {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const {name, age, sex, photo} = patient;

    return(
        <div className={styles.patientInfo}>
            <div className={styles.persanalData}>
                <div>
                    <h3>{name}</h3>
                    <p>{age} лет, {sex}</p>
                </div>
                <img src={photo} width={90} height={90} alt={`Фото поциента ${name}`} />
            </div>
            <button onClick={() => setIsOpenMenu(true)}>
                <img  src="../assets/icons/dots.svg" width={20} height={4} alt="иконка с крестом" />
            </button>
            {isOpenMenu 
                ? 
                    <div className={styles.dropDown}>
                        <button onClick={() => setIsOpenMenu(false)}>Изменить</button>
                        <button onClick={() => setIsOpenMenu(false)}>Удалить</button>
                    </div>   
                : null
            }
        </div>
    )
}