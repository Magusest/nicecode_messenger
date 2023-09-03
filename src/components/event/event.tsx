import { EventType } from "../../types/eventType"
import styles from './event.module.scss'

type Props = {
    event: EventType;
}

export default function Event({event}: Props) {
    const {title, type, date, time, previewImage} = event 

    return(
        <div className={styles.event}>
            <div>
                <h3>{title}</h3>
                <div className={styles.features}>
                    <div className={styles.type}>
                        <img src="../assets/events/icons/video-camera.svg" width={15} height={15} alt="Иконка типа мероприятия" />
                        <p>{type}</p>
                    </div>
                    <div className={styles.date}>
                        <img src="../assets/events/icons/calendar.svg" width={15} height={15} alt="Иконка даты мероприятия" />
                        <p>{date}</p>
                    </div>
                    <div className={styles.time}>
                        <img src="../assets/events/icons/clock.svg" width={12} height={12} alt="Иконка времени мероприятия" />
                        <p>{time}</p>
                    </div>
                </div>
            </div>
            <img src={previewImage} width={82} height={46} alt="Постер мероприятия" />
        </div>

    )
}