import { Component } from 'react';

class Comments extends Component {
    componentDidMount () {
        
    }
    render() {
        return (
            <div className="Comments">
                <div className="countComments">
                    {`Comments ${this.props.kids.length}`}
                </div>
                
            </div>
        )
    }
}

export default Comments;