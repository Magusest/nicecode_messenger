import styles from './main.module.scss';
import { userArray } from '../../mocks/mocks';
import PatientCard from '../patientCard/patientCard';
import SearchBar from "../searchBar/searchBar";
import { useState } from 'react';
import UsersList from '../usersList/userList';

export default function Main() {
    const [currentId, setCurrentId] = useState(userArray[0].id);
    const activeUser = userArray.find((user) => user.id === currentId)
    
    const changeUserCard = (id: typeof currentId) => {
        setCurrentId(id)
    }

    return(
        <main className={styles.main}>            
            <section className={styles.users}>
                <SearchBar />
                <UsersList users={userArray} currentId={currentId} changeUserCard={changeUserCard}/>
            </section>
            <section className={styles.userCard}>
                {activeUser 
                    ? <PatientCard user={activeUser}/>
                    : null
                }
            </section>
        </main>
    )
}