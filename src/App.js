import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.comp';
import shopPage from './pages/shop/shop.comp';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={shopPage}/>
      </Switch>
    </div>
  );
}
export default App;
