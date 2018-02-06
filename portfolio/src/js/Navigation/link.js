import React from 'react';

export const Link = (props) => {
    return (
        <a href={props.href} onClick={props.onClick}>
            {props.children}
        </a>
    )
};
