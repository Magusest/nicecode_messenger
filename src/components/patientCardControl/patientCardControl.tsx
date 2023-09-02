import styles from './patientCardControl.module.scss'

export default function PatientCardControl() {
    return(
        <div className={styles.patientCardControl}>
            <ul>
                <li>
                    <button>Заметки</button>
                </li>
                <li>
                    <button>Консультации</button>
                </li>
                <li>
                    <button>Видео</button>
                </li>
                <li>
                    <button>Мероприятия</button>
                </li>
            </ul>
            <button className={styles.addButton}>
                <span>Новая заметка</span>
                <img src="../assets/icons/cross.svg" alt="" />
            </button>
        </div>

    )
}