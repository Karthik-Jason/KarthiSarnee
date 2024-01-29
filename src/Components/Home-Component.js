import * as React from "react";
import './Home-Component.css';

export default class Home extends React.Component {
    render(){
        return(
            <div id="home-page">
                <div id="home-text">
                <h1 style={{ fontFamily: 'Bonheur Royale' }}>The Wedding Of</h1>
                <h1 style={{ color: '#3C3B3B' }}>KARTHI AND SARNEE</h1>
                <h4  style={{ fontFamily: 'Lucida Sans Typewriter' }}>FOREVER IN LOVE</h4>
                <div id="bg-img"/>
                <br/><br/><br/>
                </div>
                <div id="venue">
                <h3 style={{paddingTop:'10pt'}}>WEDDING</h3>
                <h3 style={{color:'#353131'}}>08 - FEB - 2023 AT 5 'O CLOCK</h3>
                <hr style={{height:'1px',color:'black',width:'80%',backgroundColor: 'black'}}/>
                <h5 style={{color:'#7a7171',paddingBottom:'30pt'}}>Full Life A G Church, Thiruverkadu, Chennai - 600077</h5>
                </div>
                <div id="venue">
                <h3 style={{paddingTop:'10pt'}}>RECEPTION</h3>
                <h3 style={{color:'#353131'}}>08 - FEB - 2023 AT 7 'O CLOCK</h3>
                <hr style={{height:'1px',color:'black',width:'80%',backgroundColor: 'black'}}/>
                <h5 style={{color:'#7a7171',paddingBottom:'30pt'}}>Seetha Lakshmi Mahal, Thiruverkadu, Chennai - 600077</h5>
                </div>
            </div>
        )
    }
}
