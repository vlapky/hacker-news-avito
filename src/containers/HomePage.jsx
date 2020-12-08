import { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsItem from '../components/NewsItem';

class HomePage extends Component {
    componentDidMount = () => {
        this.props.loadHomePage();
    }
    render() {
        const { hits } = this.props;
        return (
            <div className="HomePage">
                <Header reloadButton />
                <ul className='NewsList'>
                    {hits && hits.map((news) => {
                        let id = news.id ? news.id : '';
                        let score = news.score ? news.score : '0';
                        let by = news.by ? news.by : 'unknown author';
                        let time = news.time;
                        let date = new Date(time * 1000).toString().slice(4, 24);
                        let title = news.title ? news.title : 'Unknown title';
                        return <NewsItem
                            key={id}
                            id={id}
                            title={title}
                            rating={score}
                            author={by}
                            date={date} />
                    })}
                </ul>
                <Footer />
            </div>
        )
    }
}

export default HomePage;