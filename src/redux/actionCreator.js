import {
    LOADING_NEWS, FETCHING_NEWS,
    LOADING_SINGLE_NEWS, FETCH_SINGLE_NEWS,
    FETCH_COMMENTS,
    LOADING_COMMENTS
} from './actions';

let updateNews = true;

export const newsClear = () => {
    return (dispatch) => {
        dispatch({ type: 'NEWS_CLEAR' })
    }
}

export const newsPageClear = () => {
    return (dispatch) => {
        dispatch({ type: 'NEWS_PAGE_CLEAR' })
    }
}

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

export function fetchComments(id) {
    return (dispatch) => {
        dispatch({ type: LOADING_COMMENTS });
        return (
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                .then(response => response.json())
                .then(news => {
                    news.kids.slice(0, 100).map(function (item) {
                        return (
                            fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
                                .then(response => response.json())
                                .then(com => {
                                    dispatch({ type: FETCH_COMMENTS, payload: com })
                                })
                        )
                    })
                })
        )
    }
}
export function autoUpdateNewsSwitch(flag) {
    updateNews = flag;
    return { type: 'SWITCH_UPDATE' };
}

export function updateNewsWithTimeout() {
    return function (dispatch) {
        setTimeout(function tick() {
            if (updateNews === true) {
                dispatch(newsClear());
                dispatch(fetchNews());
                setTimeout(tick, 60000);
            }
        }, 60000)
    }
}
