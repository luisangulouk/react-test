import './order.css';
import React from 'react';

class OrderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.cardRef = React.createRef();
      }

    orders = [];

    componentDidMount(){

    }

    onLoadedBlock = (res) => console.log(res);

    getOrders() {
        this.orders = this.props.orders.map( order => {
            return (
                <div ref={this.cardRef} key={order.id.toString()} className="card" > 
                    <img alt={ order.id } src="logo192.png" />
                    <p>{order.customer}</p>
                </div>
            );
        });
    }

    render() {
        this.getOrders();

        return (
            <div className="order-list">
                {this.orders}
            </div>
            );
    }
}

export default OrderComponent;