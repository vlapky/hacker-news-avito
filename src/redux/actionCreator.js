import { CREATE_NEWS_PAGE, REMOVE_NEWS_PAGE, LOADING_NEWS, FETCHING_NEWS, LOADING_SINGLE_NEWS, FETCH_SINGLE_NEWS } from './actions';

export const createNewsPage = (id, title, address, author, date) => {
    console.log(address);
    return {
        type: CREATE_NEWS_PAGE,
        id,
        title,
        address,
        author,
        date
    }
};

export const removeNewsPage = () => ({
    type: REMOVE_NEWS_PAGE,
    id: '',
    title: '',
    address: '',
    author: '',
    date: ''
});

export function fetchNews() {
    return (dispatch) => {
        dispatch({ type: LOADING_NEWS });
        return (
            fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
                .then(response => response.json())
                .then(newsIds => {
                    newsIds.slice(0, 100).map(function (id) {
                        return (
                            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                            .then(response => response.json())
                            .then(news => {
                                dispatch({ type: FETCHING_NEWS, payload: news})
                            })
                        )
                    })
                })
        )
    }
}

export function fetchSingleNews(newsId) {
    return (dispatch) => {
      dispatch({type: LOADING_SINGLE_NEWS});
      return (
        fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`)
        .then(response => response.json())
        .then(news => {
          dispatch({type: FETCH_SINGLE_NEWS, payload: news})
        })
      )
    }
  }