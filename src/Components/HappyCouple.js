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
                I knew when I met you an adventure was going to happen.
                You are the finest, loveliest, tenderest, and most beautiful person
                I have ever known and even that is an understatement.
                You look like the rest of my life, When he is with me everything look better!
                </div>
                </p>
                <img id="groom-img" alt="groom-img" src={groom}/>
                <p>
                <div id="groom-heading">
                THE GROOM
                </div>
                <br></br>
                <div id="groom">
                What can I say, she is the amazing gift from god,
                She is the answer of all my prayers 
                and she gave me a whole new side of life.          
                I never want to go back to the way life was
                before I met her. She is my forever love. 
                I wanna spend the rest of my life with her.
                </div>
                </p>
            </div>
        )
    }
}
