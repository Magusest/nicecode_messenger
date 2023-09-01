import styles from './customCheckbox.module.scss'

export default function CustomCheckbox() {
    return(
        <label className={styles.label}>
            <input type="checkbox" />
            <span className={styles.customCheckbox}></span>
            <span className={styles.customCheckboxMark}></span>
        </label>

    )
}