import { Link } from 'react-router-dom';

const NewsItem = ({ updateState, key, id, title, rating, author, date, address }) => {
    return (
        <li key={key} className="NewsItem">
            <Link onClick={() => {
                updateState(
                    {
                        id, title, rating, author, date, address
                    }
                )
            }}
                className="title link" to={`/${id}`}>
                <h2 className="title">{title}</h2>
                <span className="rating">{rating}</span>
                <span className="date">{date}</span>
                <span className="author">by {author}</span>
            </Link>


        </li>
    )
}

export default NewsItem;