// import { useState } from "react";
import { UserDataType } from "../../types/userDataType"
import Consultation from "../consultation/consultation";
import Event from "../event/event";
import Notice from "../notice/notice";
import PatientCardControl from "../patientCardControl/patientCardControl";
import PatientInfo from "../patientInfo/patientInfo";
import Video from "../video/video";
import styles from './patientCard.module.scss'

type Props = {
    user: UserDataType;
}

export default function PatientCard({user}: Props) {
    // const [isOpenMenu, setIsOpenMenu] = useState(false)

   return(
    <>  
        <PatientInfo  patient={user}/>
        <PatientCardControl />
        <div className={styles.patientContent}>
            <ul>
                {user.notices.map((notice) => (
                    <li>
                        <Notice notice={notice}/>
                    </li>
                ))}
                {/* {user.consultations.map((consultation) => (
                    <li>
                        <Consultation consultation={consultation}/>
                    </li>
                ))}
                {user.videos.map((video) => (
                    <li>
                        <Video video={video}/>   
                    </li>
                    ))}
                {user.events.map((event) => (
                    <li>
                        <Event event={event} />
                    </li>
                ))} */}
            </ul>
        </div>
    </>

   ) 
}