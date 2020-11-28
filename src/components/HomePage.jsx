import Header from './Header';
import NewsItem from './NewsItem';

const HomePage = ({ handleClick, hits }) => {
    return (
        <div className="HomePage">
            <Header handleClick={handleClick} />
            {hits.map(({ title, rating, author, date, id }) => {
                return <NewsItem key={id} id={id} title={title} rating={rating} author={author} date={date} />
            })}
        </div>
    )
}

export default HomePage;