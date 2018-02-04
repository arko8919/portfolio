import React from 'react';



export class Link extends React.Component {
    render() {
        return (
            <a href={this.props.href} onClick={this.props.onClick}>
                {this.props.children}
            </a>
        )
    }
}