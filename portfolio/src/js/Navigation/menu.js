import React from 'react';
import {Anchor} from "./anchor";
import {Link, Events, scrollSpy} from 'react-scroll';

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
        this.setState({active: menuItem});
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    handleSetActive(to) {
        this.setState({active: to});
    }

    render() {

        // Color of active menu item
        const activeStyle = {color: '#E74C3C'};
        return (
            <nav className={this.props.menuVisibility}>
                {menuItems.map(menuItem =>
                    <Link to={menuItem.name} smooth={true} duration={500} spy={true}
                          onSetActive={this.handleSetActive.bind(this)}>
                        <Anchor

                            onClick={this.handleClick.bind(this, menuItem.name)}
                            href={menuItem.href}
                        >
                            <i className="material-icons md"
                               style={this.state.active === menuItem.name ? activeStyle : {}}
                            >{menuItem.icon}</i>
                        </Anchor>
                    </Link>
                )}
            </nav>

        );
    }
}