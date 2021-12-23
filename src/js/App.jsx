import React, { Component } from 'react'
import Header from './conpoment/Header'
import Project from "./conpoment/Project"
import Skill from './conpoment/Skill'
import Contact from './conpoment/Contact'
import About from "./conpoment/About"
import Footer from './conpoment/Footer'
export default class App extends Component {

    constructor(props){
        super(props);
        this.contact = this.contact.bind(this);
        this.about = this.about.bind(this);
        this.state = {contact:undefined,about:undefined};
    }

    contact(e){
        e.preventDefault();
        if(e.type == 'click'){
            this.setState({contact: e,about:undefined});
        }
    }

    about(e){
        e.preventDefault();
        if(e.type == 'click'){
            this.setState({contact:undefined,about: e});
        }
    }

    render(){
        return (
            <>
            <Header contact={this.contact} about={this.about}/>
            <Project/>
            <Skill/>
       
            <Contact contact={this.state.contact} />
            <About about={this.state.about} />
            <Footer/>
            </>
        );
    }
    
};
