import { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsItem from '../components/NewsItem';

import { clearNews, fetchNews, autoUpdateNews, autoUpdateNewsSwitch, 
    clearComments, clearSingleNews, autoUpdateCommentsSwitch } from '../redux/actions/actionCreator';

class HomePage extends Component {
    componentDidMount = () => {
        this.props.autoUpdateCommentsSwitch(false);
        this.props.clearComments();
        this.props.clearSingleNews();

        this.props.fetchNews();

        this.props.autoUpdateNewsSwitch(true);
        this.props.autoUpdateNews();
    }
    reloadButton = () => {
        this.props.clearNews();
        this.props.fetchNews();
    }
    render() {
        const { newsList } = this.props;

        return (
            <div className="HomePage">
                <Header reloadButton={this.reloadButton} />

                <ul className='NewsList'>
                    {newsList && newsList !== null && newsList.map((news) => {

                        if (news === null) return <p>LOADING ERROR</p>;

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

export default connect(
    ({ newsList }) => ({
        newsList
    }),
    {   
        clearComments,
        clearSingleNews,
        autoUpdateCommentsSwitch,

        clearNews,
        fetchNews,
        autoUpdateNews,
        autoUpdateNewsSwitch
    }
)(HomePage);