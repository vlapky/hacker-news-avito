import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Component } from 'react';

//id not address - 25331389

class NewsPage extends Component {
    componentDidMount() {
        this.props.loadSingleNews(this.props.match.params.id);
    }
    render() {
        const { clearState, title, address, date, author, kids } = this.props;
        const linkText = address && address !== '' && address.length && address.length > 40 ? `${address.slice(0, 39)}...` : address;
        return (
            <div className="NewsPage">
                <Header />
                <div className="NewsPageContent">
                    <Link onClick={clearState} className="link" to='/'>
                        Back to News
                </Link>
                    <h2 className="title">{title}</h2>
                    <a className='NewsAddress' href={address} target='_blanck'>{linkText}</a>
                    <span className="date">{date}</span>
                    <span className="author">by {author}</span>
                    <span> {`${kids}`} </span>
                </div>
                <Footer />
            </div>
        )
    }
}

export default NewsPage;