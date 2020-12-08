import {
    LOADING_NEWS, FETCHING_NEWS,
    LOADING_SINGLE_NEWS, FETCH_SINGLE_NEWS,
    FETCH_COMMENTS,
    LOADING_COMMENTS
} from './actions';

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
                                    dispatch({ type: FETCHING_NEWS, payload: news })
                                })
                        )
                    })
                })
        )
    }
}

export function fetchSingleNews(newsId) {
    return (dispatch) => {
        dispatch({ type: LOADING_SINGLE_NEWS });
        return (
            fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`)
                .then(response => response.json())
                .then(news => {
                    dispatch({ type: FETCH_SINGLE_NEWS, payload: news })
                })
        )
    }
}


