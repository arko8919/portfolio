import React from 'react';
import {MenuButton} from "./menuButton";
import {Menu} from "./menu";

export class MenuContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: "hide"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            {
                visible: this.state.visible === "hide" ? "show" : "hide"
            }
        );
    }

    render() {
        return (
            <div className="nav-container">
                <div className="menu">
                    <MenuButton onClick={this.handleClick}/>
                </div>
                <Menu menuVisibility={this.state.visible} onClick={this.handleClick}/>
            </div>
        );
    }
}

