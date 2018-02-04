import React from 'react';

export const MenuButton = (props) => {
    return (
        <a onClick={props.onClick}>
            <i className="material-icons md">&#xE5D2;</i>
        </a>
    )
};

