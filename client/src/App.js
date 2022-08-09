import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from '../src/components/Header/Header'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element=""/>
      <Route path='/new' element=""/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
