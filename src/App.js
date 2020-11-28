import './styles/normalize.css';
import './styles/App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';

const exampleItems = [
  {
    title: 'Fjfsjdskjds',
    rating: '1232300',
    author: 'JoSdsdsd',
    date: Date().slice(3, 15),
    id: `${Date().slice(3, 15)}`,
  },
  {
    title: 'Djjijdwdw',
    rating: '1211000',
    author: 'JFWFWo',
    date: Date().slice(3, 15),
    id: `${Date().slice(3, 15)}`,
  },
  {
    title: 'Djjijdwdw',
    rating: '1211000',
    author: 'JFWFWo',
    date: Date().slice(3, 15),
    id: `${Date().slice(3, 15)}`,
  },
  {
    title: 'Djjijdwdw',
    rating: '1211000',
    author: 'JFWFWo',
    date: Date().slice(3, 15),
    id: `${Date().slice(3, 15)}`,
  },];

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(props) => <HomePage {...props} hits={exampleItems} />} />
        <Route path='/122' render={(props) => <NewsPage
          title='Test Page'
          address='https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwjWkvac2qXtAhVqk4sKHe9-C9sQPAgI'
          date={Date().slice(3, 15)}
          author='vlapky' />} />
      </Switch>
    </div>
  );
}

export default App;
