import './App.css';
import Login from './Login';
import { AppProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <div className='container'>
          <ThemeToggle/>
          <Login/>
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
