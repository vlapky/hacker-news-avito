import { Component } from "react";

class SubComments extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
        .then(response => response.json())
        .then(news => {
            news.kids.slice(0,100).map( item => {
                return(
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
                    .then(response => response.json())
                    .then(com => {
                        this.setState({ ...this.state, comments: [...this.state.comments, com] })
                    })
                )
            })
        })
    }

    render() {
        const { CommentComponent } = this.props;
        const { comments } = this.state;

        return (
            <div className='Comments SubComments'>
                {comments.map(commentData =>
                    <CommentComponent key={commentData.id} 
                    commentData={commentData} />
                )}
            </div>
        )
    }
}

export default SubComments;