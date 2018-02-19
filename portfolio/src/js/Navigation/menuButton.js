import React from 'react';

export const MenuButton = (props) => {
    return (
        <a onClick={props.onClick}>
            {props.children}
        </a>
    )
};

