import React from 'react'
import faker from 'faker';

class CommentComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = { message: ''};
    }

    componentDidMount() {
        this.setState({ message: 'some message' });
    }

    render() {
        return (
            <div className="ui comments">
                <h3 className="ui dividing header">Comments</h3>
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()} />
                    </a>
                    <div className="content">
                        <a href="/" className="author">{this.props.author}</a>
                        <div className="metadata">
                            <span className="date">{this.props.posttime}</span>
                        </div>
                        <div className="text">
                            {this.props.body}
                        </div>
                        <div className="actions">
                            <a href="/" className="reply">Reply</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}


export default CommentComponent;