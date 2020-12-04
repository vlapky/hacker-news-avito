import Header from './Header';
import NewsItem from './NewsItem';

const HomePage = ({ updateState, handleClick, hits }) => {
    return (
        <div className="HomePage">
            <Header handleClick={handleClick} />
            <ul className='newsList'>
                {hits.map(({ title, rating, author, date, id, address }, index) => {
                    return <NewsItem updateState={updateState} address={address} key={index} id={id} title={title} rating={rating} author={author} date={date} />
                })}
            </ul>
        </div>
    )
}

export default HomePage;