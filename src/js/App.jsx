import React, { Component } from 'react'
import Header from './conpoment/Header'
import Project from "./conpoment/Project"
import Skill from './conpoment/Skill'
import Contact from './conpoment/Contact'
export default class App extends Component {

    constructor(props){
        super(props);
        this.contact = this.contact.bind(this);
        this.state = {contact:undefined};
    }

    contact(e){
        e.preventDefault();
        if(e.type == 'click'){

            this.setState({contact: e});
        }
    }

    render(){
        return (
            <>
            <Header contact={this.contact}/>
            <Project/>
            <Skill/>
            <Contact contact={this.state.contact} />
            </>
        );
    }
    
};
