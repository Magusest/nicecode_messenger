import styles from './main.module.scss';
import { userArray } from '../../mocks/mocks';
import PatientCard from '../patientCard/patientCard';
import SearchBar from "../searchBar/searchBar";
import { useState } from 'react';
import PatientList from '../patientsList/patientList';

export default function Main() {
    const [currentId, setCurrentId] = useState(userArray[0].id);
    const activePatient = userArray.find((user) => user.id === currentId)
    
    const changeUserCard = (id: typeof currentId) => {
        setCurrentId(id)
    }

    return(
        <main className={styles.main}>            
            <section className={styles.patients}>
                <SearchBar />
                <PatientList patients={userArray} currentId={currentId} changeUserCard={changeUserCard}/>
            </section>
            <section className={styles.userCard}>
                {activePatient 
                    ? <PatientCard user={activePatient}/>
                    : null
                }
            </section>
        </main>
    )
}