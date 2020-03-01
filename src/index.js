import React from 'react';
import ReactDOM from 'react-dom';
import CommentComponent from './CommentComponent';
import AprovalComponent from './AprovalComponent';

class App extends React.Component {
    constructor(){
        super();

        this.state = { title: null };
    }

    render(){
        return (
            <div>
                <AprovalComponent>
                    <CommentComponent author="Luis" posttime="10:00 AM" body="some text for the comment"/>
                </AprovalComponent>
            </div>
        );   
    }
}

ReactDOM.render(<App />, document.getElementById('root'));