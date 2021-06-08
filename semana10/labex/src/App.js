import './App.css';
import CreateTripPage from './components/CreateTripPage';
import ListTripPage from './components/ListTripPage';

function App() {
  return (
    <div className="App">
      <ListTripPage />
      <CreateTripPage />
    </div>
  );
}

export default App;
