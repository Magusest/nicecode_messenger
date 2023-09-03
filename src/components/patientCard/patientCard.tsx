// import { useState } from "react";
import { useState } from "react";
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
    const {notices, consultations, videos, events} = user;

    const [currentControl, setCurrentControl] = useState('events')

    const changeCardControl = (control: typeof currentControl) => {
        setCurrentControl(control)
    }

    return(
        <>  
            <PatientInfo  patient={user}/>
            <PatientCardControl changeCardControl={changeCardControl} currentControl={currentControl}/>
            <div className={styles.patientContent}>
                <ul>
                    {
                        currentControl === 'notices' 
                            ?
                                notices.map((notice, index) => (
                                    <li key={`${notice.date}-${index}`}>
                                        <Notice notice={notice}/>
                                    </li>
                                ))
                            : null
                    }
                    {
                        currentControl === 'consultations' 
                            ?
                                consultations.map((consultation, index) => (
                                    <li key={`${consultation.date}-${index}`}>
                                        <Consultation consultation={consultation}/>
                                    </li>
                                ))
                            : null
                    }
                                    {
                        currentControl === 'videos' 
                            ?
                                videos.map((video, index) => (
                                    <li key={`${video.date}-${index}`}>
                                        <Video video={video}/>   
                                    </li>
                                ))
                            : null
                    }
                    {
                        currentControl === 'events' 
                            ?
                                events.map((event, index) => (
                                    <li key={`${event.date}-${index}`}>
                                        <Event event={event} />
                                    </li>
                                ))
                            : null
                    }

                </ul>
            </div>
        </>

   ) 
}