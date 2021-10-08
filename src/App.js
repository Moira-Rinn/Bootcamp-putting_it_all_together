// import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <header className="App-header">
          <PersonCard firstName={'Sacha'} lastName={'Rinn'} age={40} hairColor={'Gray'} />
          <PersonCard firstName={'Moira'} lastName={'Rinn'} age={25} hairColor={'Purple'} />
          <PersonCard firstName={'Carys'} lastName={'Rinn'} age={18} hairColor={'Pink'} />
          <PersonCard firstName={'Jane'} lastName={'Doe'} age={27} hairColor={'Black'} />
        </header>
      </div>
    </div>
  );
}

export default App;
