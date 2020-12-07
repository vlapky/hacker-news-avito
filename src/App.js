import './styles/normalize.css';
import './styles/App.css';

import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';

import { Component } from 'react';

import { fetchNews, fetchSingleNews } from './redux/actionCreator';

class App extends Component {

  componentDidMount() {
    const fetchNews = this.props.fetchNews;
    fetchNews();
  }

  loadSingleNews = (id) => {
    this.props.fetchSingleNews(id);
  }

  render() {
    const hits = this.props.hits.newsList;
    const singleNews = this.props.hits.singleNews;

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={(props) => <HomePage
            {...props}
            hits={hits} />} />
          <Route path='/:id' render={(props) => <NewsPage
            {...props}
            loadSingleNews={this.loadSingleNews}
            kids={singleNews.kids}
            title={singleNews.title}
            address={singleNews.url}
            date={new Date(singleNews.time*1000).toString().slice(3, 24)}
            author={singleNews.by} />} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  ({ hits }) => ({
    hits
  }),
  {
    fetchNews,
    fetchSingleNews
  }
)(App);
