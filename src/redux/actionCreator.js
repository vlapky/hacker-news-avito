import { CREATE_NEWS_PAGE, REMOVE_NEWS_PAGE } from './actions';

export const createNewsPage = (id, title, address, author, date) => {
    console.log( address);
    return {
        type: CREATE_NEWS_PAGE,
        id,
        title,
        address,
        author,
        date
    }
}
    ;

export const removeNewsPage = () => ({
    type: REMOVE_NEWS_PAGE,
    id: '',
    title: '',
    address: '',
    author: '',
    date: ''
});