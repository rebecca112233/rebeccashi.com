import React from 'react';
import './homepage.css';

export default class HomePage extends React.Component{
    render(){
        return(
            <div id="home">
                <h1 id="title">Hi, I'm Rebecca</h1><br></br><hr width="50%"></hr>
                <h2 id="subtitle">I'm a software engineer with a passion for digital art and UI/UX design</h2>
            </div>
        )
    }
}