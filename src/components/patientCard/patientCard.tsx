import { UserDataType } from "../../types/userDataType"

type Props = {
    user: UserDataType;
}

export default function PatientCard({user}: Props) {
   return(
    <>
        <div>patientInfo</div>
        <div>patientCardControl</div>
        <div>patientContent</div>
    </>

   ) 
}