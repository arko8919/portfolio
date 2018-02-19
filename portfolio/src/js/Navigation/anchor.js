import React from 'react';

export const Anchor = (props) => {
    return (
        <span onClick={props.onClick}>
            {props.children}
        </span>
    )
};
