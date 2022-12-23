import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Home} from './pages';
import MainRoutes from './router';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <MainRoutes/>
      </nav>
      <Home/>
    </BrowserRouter>
  );
}

export default App;
