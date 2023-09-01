import styles from './main.module.scss';
import UsersSection from '../usersSection/userSection';
import { UserDataType } from '../../types/userDataType';
import PatientCard from '../patientCard/patientCard';

type Props = {
    user: UserDataType;
    users: UserDataType[];
}

export default function Main({user, users}: Props) {
    return(
        <main className={styles.main}>            
            <section className={styles.users}>
                <UsersSection users={users}/>
            </section>
            <section className={styles.userCard}>
                <PatientCard user={user}/>
            </section>
        </main>
    )
}