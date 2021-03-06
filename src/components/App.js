import React from 'react';
import orderApi from '../api/orderApi';
import CommentComponent from './CommentComponent';
import AprovalComponent from './AprovalComponent';
import OrderComponent from './OrderComponent';


class App extends React.Component {
    
    state = { orders: [] };

    onSearchSubmit = async term => {
        const response = await orderApi.get('/orders/', {
                params: {
                    key: term,
                    page_size: 20,
                    page: 3
                }
            }
        );
        
        this.setState({ orders : response.data.items });
    }

    render(){
        return (
            <div>
                <p>{this.state.orders.length}</p>
                <AprovalComponent>
                    <CommentComponent onSubmit={this.onSearchSubmit} author="Luis" posttime="10:00 AM" body="some text for the comment"/>
                </AprovalComponent>
                <div><OrderComponent orders={this.state.orders} /></div>
            </div>
        );   
    }
}

export default App;