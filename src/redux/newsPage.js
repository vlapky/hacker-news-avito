import { CREATE_NEWS_PAGE, REMOVE_NEWS_PAGE } from './actions';

const BASE = {
    id: '',
    title: '',
    address: '',
    author: '',
    date: ''
};

const newsPage = (state = BASE, { type, id, title, address, author, date }) => {
    //console.log(type, address );
    switch (type) {
        case CREATE_NEWS_PAGE:
          return {
            id,
            title, 
            address,
            author,
            date
          };
        case REMOVE_NEWS_PAGE:
          return {
            id: '',
            title: '',
            address: '',
            author: '',
            date: ''
          }
        default:
          return state;
      }
}

export default newsPage;