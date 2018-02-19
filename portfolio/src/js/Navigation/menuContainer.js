import React from 'react';
import {MenuButton} from "./menuButton";
import {MenuIconBar} from "./menuIconBar";
import {Menu} from "./menu";

export class MenuContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: "hide",
            color: "#fff"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            {
                visible: this.state.visible === "hide" ? "show" : "hide",
                color: this.state.color === "#fff" ? "#08FDD8" : "#fff"
            }
        );
    }

    render() {
        return (
            <div className="nav-container">
                <div className="menu">
                    <MenuButton onClick={this.handleClick}>
                        <MenuIconBar iconColor={this.state.color}/>
                    </MenuButton>
                </div>
                <Menu menuVisibility={this.state.visible} onClick={this.handleClick}/>
            </div>
        );
    }
}

