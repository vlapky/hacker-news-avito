import {
    CLEAR_NEWS, LOADING_NEWS, FETCHING_NEWS,

    CLEAR_SINGLE_NEWS, LOADING_SINGLE_NEWS, FETCH_SINGLE_NEWS,
    
    CLEAR_COMMENTS, LOADING_COMMENTS, FETCHING_COMMENTS, 
    
    SWITCH_NEWS_FLAG, SWITCH_COMMENTS_FLAG,
} from './actions';

let updateNewsFlag = true;
let updateCommentsFlag = false;

export const clearNews = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_NEWS })
    }
}

export const clearSingleNews = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_SINGLE_NEWS })
    }
}

export const clearComments = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_COMMENTS })
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
                                    dispatch({ type: FETCHING_COMMENTS, payload: com })
                                })
                        )
                    })
                })
        )
    }
}
export function autoUpdateNewsSwitch(flag) {
    updateNewsFlag = flag;
    return { type: SWITCH_NEWS_FLAG };
}

export function autoUpdateCommentsSwitch(flag) {
    updateCommentsFlag = flag;
    return { type: SWITCH_COMMENTS_FLAG };
}

export function autoUpdateNews() {
    return function (dispatch) {
        setTimeout(function tick() {
            if (updateNewsFlag === true) {
                dispatch(clearNews());
                dispatch(fetchNews());
                setTimeout(tick, 60000);
            }
        }, 60000)
    }
}

export function autoUpdateComments() {
    return function (dispatch) {
        setTimeout(function tick() {
            if (updateCommentsFlag === true) {
                dispatch(clearComments());
                dispatch(fetchComments());
                setTimeout(tick, 60000);
            }
        }, 60000)
    }
}
