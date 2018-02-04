import React, {Component} from 'react';
import '../sass/App.css';
import {MenuContainer} from "./Navigation/menuContainer";
import {Home} from "./Pages/Home/home";
import {About} from "./Pages/About/about";
import {Skills} from "./Pages/Skills/skills";
import {MyWork} from "./Pages/myWork/myWork";
import {Contact} from "./Pages/Contact/contact";

class App extends Component {
    render() {
        return (
            <div className="container">
                {/*Navigation*/}
                <MenuContainer/>
                <Home/>
                <About/>
                <Skills/>
                <MyWork/>
                <Contact/>
            </div>
        );
    }
}

export default App;
