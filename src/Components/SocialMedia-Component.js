import * as React from "react";
import {FaTwitter,FaFacebook,FaInstagram} from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import './SocialMedia-Component.css';

export default class SocialMediaComponent extends React.Component {
    render(){
        return(
            <div id="map-container">
                <div id="venue">
                <h3 style={{color:'#353131',paddingTop:'20pt'}}>FOLLOW US!</h3>
                <hr style={{height:'1px',color:'black',width:'80%',backgroundColor: 'black'}}/>
                <h5 class="followus" style={{color:'#7a7171',paddingTop:'0pt'}}>Stay up to date with the happy couple. Tag wedding related posts with the hashtag #ourweddinghashtag</h5>
                <div className="social-container">
                <a className="social facebook" href="https://twitter.com/jasonkarthi99"><FaTwitter/></a>
                <a className="social twitter" href="https://www.facebook.com/jason.danry"><FaFacebook/></a>
                <a className="social instagram" href="https://www.instagram.com/j_sonkarthik/"><FaInstagram/></a>
                <a className="social instagramsarnee" href="https://www.instagram.com/___so__worth__it___/"><SiInstagram/></a>
                </div>
                <br/><br/>
                </div>
               </div>
        )
    }
}
