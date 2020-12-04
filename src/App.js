import './styles/normalize.css';
import './styles/App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import { Component } from 'react';

const exampleItems = [
  {
    title: 'Fjfsjdskjds',
    rating: '1232300',
    author: 'JoSdsdsd',
    date: Date().slice(3, 15),
    id: `${Date().slice(3, 15)}Fjfsjdskjds`,
    address: 'https://www.google.ru/'
  },
  {
    title: 'Djjijdwdw',
    rating: '1211000',
    author: 'JFWFWo',
    date: Date().slice(3, 15),
    id: `${Date().slice(3, 15)}Djjijdwdw`,
    address: 'https://www.google.ru/1'
  },
  {
    title: 'KJKLjskds',
    rating: '1211000',
    author: 'JFWFWo',
    date: Date().slice(3, 15),
    id: `${Date().slice(3, 15)}KJKLjskds`,
    address: 'https://www.google.ru/2'
  },
  {
    title: 'sdssds',
    rating: '1211000',
    author: 'JFWFWo',
    date: Date().slice(3, 15),
    id: `${Date().slice(3, 15)}sdssds`,
    address: 'https://www.google.ru/3'
  },];

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      address: '',
      author: '',
      date: ''
    }
  }
  updateState = (newState) => {
    this.setState(newState);
    
  }
  clearState = () => {
    this.setState({
      id: '',
      title: '',
      address: '',
      author: '',
      date: ''
    });
    
  }
  render() {
    const { id, title, address, date, author } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={(props) => <HomePage
            {...props}
            updateState={this.updateState}
            hits={exampleItems} />} />
          <Route path='/:id' render={(props) => <NewsPage
            clearState={this.clearState}
            id={id}
            title={title}
            address={address}
            date={date}
            author={author} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
