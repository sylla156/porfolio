import React, { Component } from 'react'
import Header from './conpoment/Header'
import Project from "./conpoment/Project"
import Skill from './conpoment/Skill'
export default class App extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            <Header/>
            <Project/>
            <Skill/>
            <contact/>
            </>
        );
    }
    
};
