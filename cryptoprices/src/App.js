// -core react imports
// -npm module imports
// -page component imports
// -stylesheets
import{Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main'
import Currencies from './pages/Currencies';
import Price from './pages/Price';
function App() {
  return (
    <div className="App">
      <Nav />
      
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      
      <Route path='/currencies'>
        <Currencies />
      </Route>

      <Route path='/price/:symbol' render={(renderProps) => <Price {...renderProps} /> } />
      {/* 
        render props provides 3 props objects
        1) history- provides information on browser history and methods to mutate browser history
        2) Location- Provides information on query params - anything that comes after the ?
        3) Match- provides information on url params
      
      */}
    
    </Switch> 
    </div>
  );
}

export default App;
