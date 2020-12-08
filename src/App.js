import './styles/normalize.css';
import './styles/App.css';

import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import HomePage from './containers/HomePage';
import NewsPage from './containers/NewsPage';

import { Component } from 'react';

import { fetchNews, fetchSingleNews, fetchComments } from './redux/actionCreator';

class App extends Component {

  // componentDidMount() {
  //   const fetchNews = this.props.fetchNews;
  //   fetchNews();
  // }
  loadHomePage = () => {
    this.props.fetchNews();
  }

  loadSingleNews = (id) => {
    this.props.fetchSingleNews(id);
  }


  render() {
    const { newsList, singleNews, comments } = this.props.hits;
    // const hits = this.props.hits.newsList;
    // const singleNews = this.props.hits.singleNews;

    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/'
            render={() =>
              <HomePage
                loadHomePage={this.loadHomePage}
                hits={newsList} />} />
          <Route
            path='/:id'
            render={(props) =>
              <NewsPage
                {...props}
                loadSingleNews={this.loadSingleNews}
                loadComments={this.loadComments}
                newsData={singleNews}
                comments={comments} />} />
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
    fetchSingleNews,
  }
)(App);
