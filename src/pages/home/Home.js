import React from 'react';
import './home.css';
import Arrow from '../../components/Arrow/Arrow';
import About from '../about/About';
import Resume from '../resume/resume';
import {Link} from 'react-scroll';

export default class HomePage extends React.Component{
    render(){
        return(
            <>
            <div id="home">
                <h1 id="title">Hi, I'm Rebecca</h1><br></br>
                {/* <hr width="50%"></hr> */}
                <h3 id="subtitle">I'm a software engineer with a passion for digital art and UI/UX design</h3>
            </div>
            <Link to="about" smooth={true}><Arrow /></Link>
            <About id="about" />
            </>
        )
    }
}