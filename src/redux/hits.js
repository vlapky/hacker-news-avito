import { LOADING_NEWS, FETCHING_NEWS } from './actions';

const BASE = [
  {
    title: 'Fjfsjdskjds',
    rating: '1232300',
    author: 'JoSdsdsd',
    date: Date().slice(4, 15),
    id: `${Date().slice(4, 15)}Fjfsjdskjds`,
    address: 'https://www.google.ru/'
  },
  {
    title: 'Djjijdwdw',
    rating: '1211000',
    author: 'JFWFWo',
    date: Date().slice(4, 15),
    id: `${Date().slice(4, 15)}Djjijdwdw`,
    address: 'https://www.google.ru/1'
  },
  {
    title: 'KJKLjskds',
    rating: '1211000',
    author: 'JFWFWo',
    date: Date().slice(4, 15),
    id: `${Date().slice(4, 15)}KJKLjskds`,
    address: 'https://www.google.ru/2'
  },
  {
    title: 'sdssds',
    rating: '1211000',
    author: 'JFWFWo',
    date: Date().slice(4, 15),
    id: `${Date().slice(4, 15)}sdssds`,
    address: 'https://www.google.ru/3'
  },];

const hits = (state={newsList: [], singleNews: [] }, { type, payload }) => {
  switch (type) {
    case LOADING_NEWS:
      return {...state};
    case FETCHING_NEWS:
      return {...state, newsList: [...state.newsList, payload]};
    default:
      return state;
  }
}

export default hits;