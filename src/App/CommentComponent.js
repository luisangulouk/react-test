import React from 'react'
import faker from 'faker';

class CommentComponent extends React.Component {

    state = { term: '', message: '' };

    componentDidMount() {
        this.setState({ message: 'some message' });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
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
                        <div className= "ui segment">
                            <form onSubmit={this.onFormSubmit} className="ui form">
                                <div className="field">
                                    <input type="text"
                                        value={this.state.term}
                                        onChange={e => this.setState({ term: e.target.value })} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}


export default CommentComponent;