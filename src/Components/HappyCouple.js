import * as React from "react";
import './HappyCouple.css';
import bride from './bride.jpg';
import groom from './groom.jpg';

export default class HappyCouple extends React.Component {
    render(){
        return(
            <div id="happy-couple">
                <h2 id="heading">HAPPY COUPLE</h2>
                <hr style={{height:'1px',color:'black',width:'80%',backgroundColor: 'black'}}/>
                <img id="bride-img" alt="bride-img" src={bride}/>
                <p>
                <div id="bride-heading">
                THE BRIDE
                </div>
                <br></br>
                <div id="bride">
                I think the moment I knew he was “the
                one” was when I had a work assignment
                that would take me to France for 10
                weeks.
                </div>
                <div id="bride">
                It was only once I was on the plane I
                realized how much I would miss him. I
                never wanted to be without him again!
                </div>
                </p>
                <img id="groom-img" alt="groom-img" src={groom}/>
                <p>
                <div id="groom-heading">
                THE GROOM
                </div>
                <br></br>
                <div id="groom">
                I think the moment I knew he was “the
                one” was when I had a work assignment
                that would take me to France for 10
                weeks.
                </div>
                <div id="groom">
                It was only once I was on the plane I
                realized how much I would miss him. I
                never wanted to be without him again!
                </div>
                </p>
            </div>
        )
    }
}
