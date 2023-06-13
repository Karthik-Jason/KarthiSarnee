import * as React from "react";
import './Home-Component.css';

export default class Home extends React.Component {
    render(){
        return(
            <div id="home-page">
                <div id="home-text">
                <h1 style={{ fontFamily: 'Bonheur Royale' }}>The Wedding Of</h1>
                <h1 style={{ color: '#dfaeae' }}>KARTHI AND SARNEE</h1>
                <h4  style={{ fontFamily: 'Lucida Sans Typewriter' }}>FOREVER IN LOVE</h4>
                <div id="bg-img"/>
                <br/><br/><br/>
                </div>
                <div id="venue">
                <h3 style={{color:'#353131',paddingTop:'30pt'}}>01 - AUG - 2023 AT 6 'O CLOCK (DATE EPONU ENAKE THERIYATHU)</h3>
                <hr style={{height:'1px',color:'black',width:'80%',backgroundColor: 'black'}}/>
                <h5 style={{color:'#7a7171',paddingBottom:'30pt'}}>Seetha Lakshmi Mahal, Thiruverkadu, Chennai - 600077</h5>
                </div>
            </div>
        )
    }
}
