import React from 'react';
import { Link } from "./link";

const menuItems = [
    {name: "HOME", icon: "home", href: "#home"},
    {name: "ABOUT", icon: "face", href: "#about"},
    {name: "SKILLS", icon: "settings", href: "#skills"},
    {name: "MY WORK", icon: "work", href: "#myWork"},
    {name: "CONTACT", icon: "mail_outline", href: "#contact"}];

export class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {active: "HOME"};

    }

    handleClick(menuItem) {
        this.props.onClick();
        this.setState({ active: menuItem });
    }

    render() {
        // Color of active menu item
        const activeStyle = { color: '#E74C3C' };
        return (
            <nav className={this.props.menuVisibility}>
                {menuItems.map(menuItem =>
                        <Link
                            onClick={this.handleClick.bind(this, menuItem.name)}
                            href={menuItem.href}
                        >
                            <i className="material-icons md"
                               style={this.state.active === menuItem.name ? activeStyle : {}}
                            >{menuItem.icon}</i>
                        </Link>
                )}
            </nav>
        );
    }
}