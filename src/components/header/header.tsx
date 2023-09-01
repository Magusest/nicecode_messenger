import styles from './header.module.scss'

export default function Header(): JSX.Element {
    return(
      <header className={styles.header}>
        <h1>Это шапка сайта</h1>
      </header>
    )
  }
  