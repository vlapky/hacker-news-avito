import { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Comments from './Comments';

class NewsPage extends Component {
    componentDidMount = () => {
        this.props.loadSingleNews(this.props.match.params.id);
        this.props.autoUpdateNewsSwitch(false);
    }

    reloadButton = () => {
        
    }
    render() {
        const { title, url, time, by, text, kids } = this.props.newsData;

        const id = this.props.match.params.id

        const date = new Date(time * 1000).toString().slice(3, 24);
        const linkText = url && url !== '' && url.length && url.length > 40 ? `${url.slice(0, 39)}...` : url;
        console.log(this.props.comments);
        return (
            <div className="NewsPage">
                <Header reloadButton={this.reloadButton} />
                <div className="NewsPageContent">
                    <Link 
                    className="link" 
                    to='/'
                    onClick={this.props.newsPageClear}
                    >
                        Back to News
                    </Link>
                    {title && <h2 className="title">{title}</h2>}
                    {url && <a className='NewsAddress' href={url} target='_blanck'>{linkText}</a>}
                    {text && <div className="text">{text}</div>}
                    <div className="newsData">
                        <span className="date">{date}</span>
                        <span className="author">by {by}</span>
                    </div>
                    {kids && <Comments
                        comments={this.props.comments}
                        loadComments={this.props.loadComments}
                        id={id}
                        kids={kids} />}
                </div>
                <Footer />
            </div>
        )
    }
}

export default NewsPage;