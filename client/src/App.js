import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from '../src/components/Header/Header';
import GameList from '../src/components/GameList/GameList';
import Game from'../src/components/Game/Game';
import NewGame from './components/NewGame/NewGame';
import EditGame from './components/EditGame/EditGame';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<GameList/>}/>
      <Route path='/games/new' element={<NewGame />}/>
      <Route path='/games/:id' element={<Game />} />
      <Route path='/games/edit/:id' element={<EditGame />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
