import { useState } from "react"
import { noticeType } from "../../types/noticeType"
import styles from './notice.module.scss'

type Props = {
    notice: noticeType;
}

export default function Notice({notice}: Props) {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const {date, description} = notice 

    return(
        <div className={styles.notice}>
            <p><span>{date}</span>&nbsp;{description}</p>
            <button onClick={() => setIsOpenMenu(true)}>
                <img  src="../assets/icons/dots.svg" width={20} height={4} alt="иконка с точками" />
            </button>
            {
                isOpenMenu 
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