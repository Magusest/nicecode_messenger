import styles from './main.module.scss';
import UsersSection from '../usersSection/userSection';

export default function Main() {
    return(
        <main className={styles.main}>            
            <section className={styles.users}>
                <UsersSection />
            </section>
            <section className={styles.userInfo}></section>
        </main>
    )
}