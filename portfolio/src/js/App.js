import React, {Component} from 'react';
import '../sass/App.css';
import {MenuContainer} from "./Navigation/menuContainer";
import {Home} from "./Pages/Home/home";
import {About} from "./Pages/About/about";
import {Skills} from "./Pages/Skills/skills";
import {MyWork} from "./Pages/myWork/myWork";
import {Contact} from "./Pages/Contact/contact";
import {Footer} from "./Footer/footer";

class App extends Component {
    render() {
        return (
            <div className="container">
                <MenuContainer/>
                <Home/>
                <About/>
                <Skills/>
                <MyWork/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;
