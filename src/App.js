import './assets/App.css';
import Home from './pages/Home';
import { Provider } from './Context';

function App() {
  return (
    <>
    <Provider>
      <Home />
    </Provider>
      
    </>
  );
}

export default App;
