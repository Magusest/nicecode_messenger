import { UserDataType } from "../../types/userDataType"
import PatientCardControl from "../patientCardControl/patientCardControl";
import PatientInfo from "../patientInfo/patientInfo";
import styles from './patientCard.module.scss'

type Props = {
    user: UserDataType;
}

export default function PatientCard({user}: Props) {
   return(
    <>  
        <PatientInfo  patient={user}/>
        <PatientCardControl />
        <div className={styles.patientContent}>
            <ul>
                <li>Контент</li>
                <li>Контент</li>
                <li>Контент</li>
                <li>Контент</li>
            </ul>
        </div>
    </>

   ) 
}