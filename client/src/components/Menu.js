import React from 'react';
import './Menu.css';

function Menu(props) {
    const handleClick = (e) => {
        let currentView = e.target.id;
        props.onChange(currentView);
    }

    const isSelected = (id) => {
        return id === props.value ? "selected" : null;
    }

    const renderElement = (id) => {
        return <li className="menuElement" id={id} type={isSelected(id)} onClick={handleClick}>{id}</li>
    }


    return (
        <div className='menu'>
            <h2 id='title'>BlueBeakStd API</h2>
            <ul className="menuCategory">
                {renderElement('metrics')}
                {renderElement('user')}
                {renderElement('auth')}
            </ul>
            <hr className='menuHr'/>
        </div>
    )
}

export default Menu;