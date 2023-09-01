import { UserDataType } from "../../types/userDataType"
import PatientInfo from "../patientInfo/patientInfo";

type Props = {
    user: UserDataType;
}

export default function PatientCard({user}: Props) {
    // const {} = user

   return(
    <>  
        <PatientInfo  patient={user}/>
        <div>patientCardControl</div>
        <div>patientContent</div>
    </>

   ) 
}