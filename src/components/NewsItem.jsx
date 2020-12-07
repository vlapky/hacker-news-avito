import { Link } from 'react-router-dom';

const NewsItem = ({ updateState, id, title, rating, author, date, address }) => {
    return (
        <li className="NewsItem">
            <Link
                className="title link" to={`/${id}`}>
                <h2 className="title">{title}</h2>
                <span className="rating">{rating} score</span>
                <span className="date">{date}</span>
                <span className="author">by {author}</span>
            </Link>


        </li>
    )
}

export default NewsItem;