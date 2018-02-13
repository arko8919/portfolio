import React from 'react';

export const Anchor = (props) => {
    return (
        <a href={props.href} onClick={props.onClick}>
            {props.children}
        </a>
    )
};
