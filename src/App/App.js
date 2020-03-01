import React from 'react';
import CommentComponent from './CommentComponent';
import AprovalComponent from './AprovalComponent';

class App extends React.Component {
    constructor(){
        super();

        this.state = { title: null };
    }

    onSearchSubmit(term) {
        console.log(term);
    }

    render(){
        return (
            <div>
                <AprovalComponent>
                    <CommentComponent onSubmit={this.onSearchSubmit} author="Luis" posttime="10:00 AM" body="some text for the comment"/>
                </AprovalComponent>
            </div>
        );   
    }
}

export default App;