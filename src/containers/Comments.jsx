import { Component } from 'react';
import Comment from '../components/Comment';

class Comments extends Component {
    componentDidMount () {
        this.props.loadComments(this.props.id);
    }
    render() {
        console.log(this.props.comments);
        return (
            <div className="Comments">
                <div className="countComments">
                    <p>{`Comments ${this.props.kids.length}`}</p>
                </div>
                {this.props.comments.map(item => 
                    <Comment key={item.id} item={item} />
                )}
                
            </div>
        )
    }
}

export default Comments;