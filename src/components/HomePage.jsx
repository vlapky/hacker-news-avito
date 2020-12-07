import Footer from './Footer';
import Header from './Header';
import NewsItem from './NewsItem';

const HomePage = ({ updateState, handleClick, hits }) => {
    console.log(hits);
    return (
        <div className="HomePage">
            <Header />
            <ul className='NewsList'>
                {hits.map((news) => {
                    let id = news.id ? news.id : '';
                    let score = news.score ? news.score : '';
                    let by = news.by ? news.by : '';
                    let time = news.time ? news.time : '';
                    let url = news.url ? news.url : '';
                    let date = new Date(time*1000).toString().slice(4, 24);
                    let title = news.title ? news.title : 'Unknown title';
                    return <NewsItem updateState={updateState} address={url} key={id} id={id} title={title} rating={score} author={by} date={date} />
                })}
            </ul>
            <Footer />
        </div>
    )
}

export default HomePage;