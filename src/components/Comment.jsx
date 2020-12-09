import { Component } from "react";
import SubComments from './SubComments';

class Comment extends Component {
    state = {
        render: false,
    };

    render() {
        const { text, by, time, id, kids } = this.props.commentData;
        const { render } = this.state;
        const formatText = `${text}`;

        const date = new Date(time * 1000).toString().slice(3, 24);

        return (
            <div className="Comment">
                <p className="text">{formatText}</p>
                <span>{`${date} by ${by}`} </span>
                {kids && <button onClick={() => this.setState({ render: !render })} >
                    {render ? 'Hide' : 'Show'} layer
                </button>}
                { render && <SubComments
                        CommentComponent={Comment} id={id} />}
            </div>
        )
    }


}

export default Comment;