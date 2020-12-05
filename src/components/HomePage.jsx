import Footer from './Footer';
import Header from './Header';
import NewsItem from './NewsItem';

const HomePage = ({ updateState, handleClick, hits }) => {
    return (
        <div className="HomePage">
            <Header handleClick={handleClick} />
            <ul className='NewsList'>
                {hits.map(({ title, rating, author, date, id, address }) => {
                    return <NewsItem updateState={updateState} address={address} key={id} id={id} title={title} rating={rating} author={author} date={date} />
                })}
            </ul>
            <Footer />
        </div>
    )
}

export default HomePage;