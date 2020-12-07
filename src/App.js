import './styles/normalize.css';
import './styles/App.css';

import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';

import { Component } from 'react';

import { createNewsPage, removeNewsPage } from './redux/actionCreator';

class App extends Component {

  updateState = ({ id, title, address, author, date }) => {
    const createNewsPage = this.props.createNewsPage;
    createNewsPage(id, title, address, author, date);
    
  }
  clearState = () => {
    const removeNewsPage = this.props.removeNewsPage;
    removeNewsPage();
  }

  render() {
    const { id, title, address, date, author } = this.props.newsPage;
    const hits = this.props.hits;

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={(props) => <HomePage
            {...props}
            updateState={this.updateState}
            hits={hits} />} />
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

export default connect(
  ({ newsPage, hits }) => ({
    newsPage,
    hits
  }),
  {
    createNewsPage,
    removeNewsPage
  }
)(App);
