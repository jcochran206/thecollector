import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from '../src/components/Header/Header';
import GameList from '../src/components/GameList/GameList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<GameList/>}/>
      <Route path='/new' element=""/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
