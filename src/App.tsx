import styles from './App.module.scss';
import Header from './components/header/header';
import Main from './components/main/main';
import { userArray } from './mocks/mocks';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main users={userArray} user={userArray[0]}/>
    </div>
  );
}

export default App;
