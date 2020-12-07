import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const HomePage = ({ clearState, handleClick, title, address, date, author }) => {
    const linkText = address.length > 40 ? `${address.slice(0, 39)}...` : address;
    return (
        <div className="NewsPage">
            <Header handleClick={handleClick} />
            <div className="NewsPageContent">
                <Link onClick={clearState} className="link" to='/'>
                    Back to News
                </Link>
                <h2 className="title">{title}</h2>
                <a className='NewsAddress' href={address} target='_blanck'>{linkText}</a>
                <span className="date">{date}</span>
                <span className="author">by {author}</span>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;