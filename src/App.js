import { Switch, Route } from 'react-router-dom';

import HomePage from './containers/HomePage';
import NewsPage from './containers/NewsPage';

import './styles/normalize.css';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>

        <Route
          exact path='/'
          render={() =>
            <HomePage />} />

        <Route
          path='/:id'
          render={(props) =>
            <NewsPage
              {...props} />} />
              
      </Switch>
    </div>
  );
}

export default App;
