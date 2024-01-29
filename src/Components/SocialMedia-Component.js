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
                <a className="social facebook" href="https://x.com/jason_karthik?t=Mw9AeAkCnYCqXf5pJ1Bshg&s=09"><FaTwitter/></a>
                <a className="social twitter" href="https://www.facebook.com/jason.danry"><FaFacebook/></a>
                <a className="social instagram" href="https://www.instagram.com/j_sonkarthik?igsh=MW8xZ2JkcWp6YjJmNg=="><FaInstagram/></a>
                <a className="social instagramsarnee" href="https://www.instagram.com/__saranya_susannah__?igsh=MXA1aXRoNDcwYmJ5dw=="><SiInstagram/></a>
                </div>
                <br/><br/>
                </div>
               </div>
        )
    }
}
