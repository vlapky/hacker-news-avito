const Header = ({ reloadButton }) => {
    return (
        <div className="Header">
            <div className="BtnUpdateNews">
                <button onClick={reloadButton}>Reload</button>
            </div>
            <div className="title">
                <h1>Hacker News</h1>
            </div>
        </div>
    )
}

export default Header;