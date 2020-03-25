import React from 'react'

const HeaderComponent = (props) => {

    return (
    <div>
        <p>{ props.title }</p>
        <p>{ props.author }</p>
        <p>version{ props.version }</p>
    </div>
    );
};

export default HeaderComponent;