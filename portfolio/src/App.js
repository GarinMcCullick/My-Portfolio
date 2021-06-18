import profilePic from './profile-pic.jpeg';
import './App.css';
import Nav from './components/Navbar';
import { BsChevronDoubleDown } from 'react-icons/bs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={profilePic} className="Profile-pic" alt="Profile Picture" />
        <p>
          stuff
        </p>
          <BsChevronDoubleDown size="2em" background-color="cornflowerblue"/>
      </header>
    </div>
  );
}

export default App;
