const Comment = (props) => {
    const { text, by, time, id } = props.item;
    const date = new Date(time * 1000).toString().slice(3, 24);

    return(
        <div className="Comment">
            <p className="text">{text}</p>
            <span>{`${date} by ${by}`} </span>
        </div>
    )
}

export default Comment;