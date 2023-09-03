import { ConsultationType } from "../../types/consultationType"
import styles from './consultation.module.scss'

type Props = {
    consultation: ConsultationType;
}

export default function Consultation({consultation}: Props) {
    const {date, type, status} = consultation

    return(
        <div className={styles.consultation}>
            <div>
                <h3>{type}</h3>
                <p>{date}</p>
            </div>
            <div className={styles.imageContainer}>
                <img src={`${type === 'Online консультация' ? '../assets/icons/videoCons.svg' : '../assets/icons/personalCons.svg'}`} alt="Лготип типа консультации" />
            </div>
            {!status 
                ? 
                <div className={styles.status}>
                    <p>Не подтверждена</p>
                 </div>
                : null}
        </div>
    )
}