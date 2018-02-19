import React from 'react';
import {Link, Events, scrollSpy} from 'react-scroll';
import {Anchor} from "./anchor";


const menuItems = [
    {name: "HOME", icon: "home", key: "link1"},
    {name: "ABOUT", icon: "face", key: "link2"},
    {name: "SKILLS", icon: "settings", key: "link3"},
    {name: "MY WORK", icon: "work", key: "link4"},
    {name: "CONTACT", icon: "mail_outline", key: "link5"}];

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
        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
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
                    <Link to={menuItem.name}
                          smooth={true}
                          duration={500}
                          spy={true}
                          onSetActive={this.handleSetActive.bind(this)}
                          key={menuItem.key}
                    >
                        <Anchor
                            onClick={this.handleClick.bind(this, menuItem.name)}
                        >
                            <i className="material-icons md"
                               style={this.state.active === menuItem.name ? activeStyle : {}}
                            >
                                {menuItem.icon}
                            </i>
                        </Anchor>
                    </Link>
                )}
            </nav>
        );
    }
}