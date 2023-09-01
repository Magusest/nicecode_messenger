import styles from './searchBar.module.scss'

export default function SearchBar() {
    return(
        <div className={styles.searchBar}>
            <input type="text" />
            <div className={`${styles.icon} ${styles.loupeIcon}`}>
                <img  src="../assets/icons/loupe.svg" width={20} height={20} alt="иконка лупы" />
            </div>
            <button className={`${styles.icon} ${styles.sortIcon}`}>
                <img  src="../assets/icons/sort.svg" width={18} height={18} alt="иконка сортировки" />
            </button>
            <button className={`${styles.icon} ${styles.crossIcon}`}>
                <img  src="../assets/icons/cross.svg" width={14} height={14} alt="иконка с крестом" />
            </button>
        </div>
    )
}