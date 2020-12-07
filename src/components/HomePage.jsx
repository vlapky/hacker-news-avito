import Footer from './Footer';
import Header from './Header';
import NewsItem from './NewsItem';

const HomePage = ({ updateState, handleClick, hits }) => {
    console.log(hits);
    return (
        <div className="HomePage">
            <Header handleClick={handleClick} />
            <ul className='NewsList'>
                {hits.map(({ title, score, by, time, id, url }) => {
                    return <NewsItem updateState={updateState} address={url} key={id} id={id} title={title} rating={score} author={by} date={time} />
                })}
            </ul>
            <Footer />
        </div>
    )
}

export default HomePage;