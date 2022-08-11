import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from '../src/components/Header/Header';
import GameList from '../src/components/GameList/GameList';
import Game from'../src/components/Game/Game';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<GameList/>}/>
      <Route path='/api/new' element=""/>
      <Route path='/games/:id' element={<Game />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
