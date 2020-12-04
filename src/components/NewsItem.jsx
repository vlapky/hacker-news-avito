import { Link } from 'react-router-dom';

const NewsItem = ({ updateState, key, id, title, rating, author, date, address }) => {
    return (
        <li key={key} className="NewsItem">
            <Link onClick={()=>{updateState(
                {
                    id: id,
                    title: title,
                    address : address,
                    author: author,
                    date: date
                }
            )}} 
            className="title link" to={`/${id}`}>
                <h2 className="title">{title}</h2>
            </Link>

            <span className="rating">{` ${rating} |`}</span>
            <span className="author">{` ${author} |`}</span>
            <span className="date">{date}</span>
        </li>
    )
}

export default NewsItem;