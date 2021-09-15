import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.comp';
import shopPage from './pages/shop/shop.comp';
import Header from './components/header/header.comp';


function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={shopPage}/>
        </Switch>
    </div>
  );
}
export default App;
