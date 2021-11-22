import './sass/main.scss';
import HomeView from './components/HomeView'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';


function App() {
  return (
    <div >
      <NavBar/>
    <Routes>
    <Route path='/' element={<HomeView/>} />
</Routes>
    </div>
  );
}

export default App;
