import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import UseEffect from './components/UseEffect';
import Mapping from './components/Mapping';
import { Routes, Route } from 'react-router-dom';
import Tables from './components/Tables';
import Texts from './components/Texts';
import Api from './components/Api';
import Carda from './components/Carda';
import Grida from './components/Grida';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <UseEffect/> */}
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/sign' element={<Signup/>}></Route>
          <Route path='/count' element={<Counter/>}></Route>
          <Route path='/tex' element={<Texts/>}></Route>
          <Route path='/tab' element={<Tables/>}></Route>
          <Route path='/ap' element={<Api/>}></Route>
          <Route path='/grd' element={<Grida/>}></Route>
          <Route path='/crd' element={<Carda/>}></Route>
          
        </Routes>
      
    
    </div>
  );
}

export default App;
