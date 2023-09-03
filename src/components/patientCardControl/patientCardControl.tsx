import styles from './patientCardControl.module.scss'

type Props = {
    changeCardControl: (control: string) => void;
    currentControl: string;
}

export default function PatientCardControl({changeCardControl, currentControl}: Props) {
    return(
        <div className={styles.patientCardControl}>
            <ul>
                <li>
                    <button
                        className={`${currentControl === 'notices' ? styles.currentControl : null}`}
                        onClick={() => changeCardControl('notices')}>Заметки
                    </button>
                </li>
                <li>
                    <button 
                        className={`${currentControl === 'consultations' ? styles.currentControl : null}`}
                        onClick={() => changeCardControl('consultations')}>Консультации
                    </button>
                </li>
                <li>
                    <button 
                        className={`${currentControl === 'videos' ? styles.currentControl : null}`}
                        onClick={() => changeCardControl('videos')}>Видео
                    </button>
                </li>
                <li>
                    <button 
                        className={`${currentControl === 'events' ? styles.currentControl : null}`}
                        onClick={() => changeCardControl('events')}>Мероприятия
                    </button>
                </li>
            </ul>
            <button className={styles.addButton}>
                <span>Новая заметка</span>
                <img src="../assets/icons/cross.svg" alt="" />
            </button>
        </div>

    )
}