import Header from './Header';
import { Link } from 'react-router-dom';

const HomePage = ({ handleClick, title, address, date, author }) => {
    const linkText = address.length > 40 ? `${address.slice(0, 39)}...` : address;
    return (
        <div className="NewsPage">
            <Header handleClick={handleClick} />
            <Link className="title link" to='/'>
                Назад к новостям
            </Link>
            <h2 className="title">{title}</h2>
            <a href={address} target='_blanck'>{linkText}</a>
            <span className="date">{` ${date} |`}</span>
            <span className="author">{` ${author}`}</span>
        </div>
    )
}

export default HomePage;