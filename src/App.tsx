import './App.scss';
import Header from './components/header/header';
import Main from './components/main/main';
import { userArray } from './mocks/mocks';

function App() {
  return (
    <>
      <Header />
      <Main users={userArray} user={userArray[0]}/>
    </>
  );
}

export default App;
