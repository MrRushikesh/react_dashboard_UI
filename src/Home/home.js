import React,{Component} from 'react';
import LeftSection from './left_section';
import MiddleSection from './middle_section';
import RightSection from './right_section';
import './home.css';
import JSON from './data.json'

class Home extends Component {
    constructor(){
        super()
        this.state ={
            data : JSON
        }
    }
    render(){
        return(
            <>
            <div id="main">
                <LeftSection menuData={this.state.data}/>
                <MiddleSection/>
                <RightSection/>
            </div>  
            </>
        )
    }
   
}

export default Home;