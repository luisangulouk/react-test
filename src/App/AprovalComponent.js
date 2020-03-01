import React from 'react'

class AprovalComponent extends React.Component {

    render() {
        return (
            <div className="ui cards">
            <div className="card">
                <div className="content">
                    {this.props.children}
                </div>
                <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
                </div>
                </div>
            </div>
            </div>
        );
    }

};

export default AprovalComponent;