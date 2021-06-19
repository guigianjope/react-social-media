import './assets/App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import { Provider } from './Context';

function App() {
  const Router = () => {
    const location = window.location.pathname
    if(location === '/Details'){
      return <Details />
    } else {
      return <Home />
    }
  }
  return (
    <>
    <Provider>
      <Router />
    </Provider>
      
    </>
  );
}

export default App;
