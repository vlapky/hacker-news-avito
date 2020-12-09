import { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';

import { clearComments, fetchComments, autoUpdateComments, autoUpdateCommentsSwitch  } from '../redux/actions/actionCreator';

class Comments extends Component {
    componentDidMount () {
        this.props.fetchComments(this.props.id);
    }
    render() {
        const { comments } = this.props;
        return (
            <div className="Comments">

                <div className="countComments">
                    <p>{`Comments ${comments.length}`}</p>
                </div>

                {comments.map(commentData => 
                    <Comment key={commentData.id} commentData={commentData} />
                )}
                
            </div>
        )
    }
}

export default connect(
    ({ comments }) => ({
        comments
    }),
    {
        clearComments,
        fetchComments,
        autoUpdateComments,
        autoUpdateCommentsSwitch
    }
)(Comments);