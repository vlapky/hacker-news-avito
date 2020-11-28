import { Link } from 'react-router-dom';

const NewsItem = ({ title, rating, author, date }) => {
    return (
        <div className="NewsItem">
            <Link className="title link" to='/122'>
                <h2 className="title">{title}</h2>
            </Link>

            <span className="rating">{` ${rating} |`}</span>
            <span className="author">{` ${author} |`}</span>
            <span className="date">{date}</span>
        </div>
    )
}

export default NewsItem;