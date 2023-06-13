import * as React from "react";
import './Map-Component.css';

export default class MapComponent extends React.Component {
    render(){
        return(
            <div id="map-container">
                <div id="venue">
                <h3 style={{color:'#353131',paddingTop:'30pt'}}>DIRECTIONS</h3>
                <hr style={{height:'1px',color:'black',width:'80%',backgroundColor: 'black'}}/>
                <iframe title="churchmao" class="float-right" width="600" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3397846542816!2d80.11896587594691!3d13.077639012542825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526160197a69bd%3A0xb12ec237458879ba!2sFull%20Life%20Centre%20A.%20G.%20Church!5e0!3m2!1sen!2sus!4v1686116342937!5m2!1sen!2sus" ></iframe>
                <h5 class="venues"style={{color:'#7a7171',paddingBottom:'250pt'}}>WEDDING<hr style={{height:'1px',color:'black',width:'10%',backgroundColor: 'black'}}/><h3>Full Life Centre A. G. Church, Murugan Nagar, Thiruverkadu</h3></h5>
                <iframe title="hallmap" class="float-right" width="600" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5453460192316!2d80.11680668568671!3d13.064586479997883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261628b7094bf%3A0xc1f706ce37a51fb7!2sSri%20Seetha%20Lakshmi%20Mahal!5e0!3m2!1sen!2sus!4v1686115497302!5m2!1sen!2sus" ></iframe>
                <h5 class="venues" style={{color:'#7a7171',paddingBottom:'250pt'}}>RECEPTION<hr style={{height:'1px',color:'black',width:'15%',backgroundColor: 'black'}}/><h3>Sri Seetha Lakshmi Mahal, Pallikuppam, Thiruverkadu</h3></h5>
                </div>
               </div>
        )
    }
}
