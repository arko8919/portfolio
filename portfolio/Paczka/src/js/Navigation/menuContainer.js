import React from 'react';
import {MenuButton} from "./menuButton";
import {Menu} from "./menu";

// This class is a structure to MenuContainer Menu
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
            // This icons support Modern Browser and IE9 and below
            <div className="nav-container">
                <div className="menu">
                    <MenuButton onClick={this.handleClick}/>
                </div>
                <Menu menuVisibility={this.state.visible} onClick={this.handleClick}/>
            </div>
        );
    }
}

