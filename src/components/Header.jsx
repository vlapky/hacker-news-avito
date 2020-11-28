const Header = ({ handleClick }) => {
    return(
        <div className="Header">
            <div className="BtnUpdateNews">
                <button onClick={handleClick}>Обновить</button>
            </div>
            <div className="title">
                <h1>Hacker News</h1>
            </div>
        </div>
    )
}

export default Header;