import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import AddUsers from './AddUsers';
import EditUsers from './EditUsers';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddUsers/>}/>
        <Route path='/edit/:id' element ={<EditUsers/>}/>
      </Routes>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
