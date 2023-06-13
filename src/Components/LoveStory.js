import * as React from 'react';
import './LoveStory.css';
import firstmeet from './firstmeet.jpg';
import proposal from './proposal.jpg';
import latest from './latest.jpg';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ChurchTwoTone from '@mui/icons-material/ChurchTwoTone';
import ParkSharpIcon from '@mui/icons-material/ParkSharp';
import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp';

export default class LoveStory extends React.Component {
render(){
    return(
    <div id="timeline">
        <div id="heading">
            <h9>Our Story</h9>
        </div>
    <Timeline align="alternate">
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="h5" color="secondary">
                    25th December 2015
                </Typography>
                <img id="timelinephotos" src={firstmeet} alt="Some awesome text"/>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary'>
                    <ChurchTwoTone />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper id="leftpapers" elevation={24}>
                    <Typography id="leftheading" variant="h3">
                        Our First Meet
                    </Typography>
                    <Typography id="leftpara" variant="h5">
                    We met in 2009, at a backpacker hostel in Amsterdam. We hit it off immediately, bonding over our love of Gauguin and jazz. We had a magical time together in France during Anya's first year at grad school, and we both knew it was time. We were engaged in March 2014, and now we're getting married!
                    </Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="h5" color="primary">
                    1st April 2018
                </Typography>
                <img id="timelinephotos" src={proposal} alt="Some awesome text"/>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='primary'>
                    <ParkSharpIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper id="righttpapers" elevation={24}>
                    <Typography id="rightheading" variant="h3">
                        Our Proposal
                    </Typography>
                    <Typography id="rightpara" variant="h5">
                    Iceland, which smells of figs, sulfur, fresh snow, and wet hay becomes our home for 2 weeks. We take this trip because a change of scenery will do us some good we say, confidently, outwardly to each other at first and then to our friends who ask. During the day we walk the streets of Reykjavik in search of geothermal pools.
                    </Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="h5" color="inherit">
                    23rd June 2022
                </Typography>
                <img id="timelinephotos" src={latest} alt="Some awesome text"/>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='inherit'>
                    <HomeWorkSharpIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper id="leftpapers" elevation={24}>
                    <Typography id="leftheading" variant="h3">
                        Now
                    </Typography>
                    <Typography id="leftpara" variant="h5">
                        We grew together as a happy couple for more than four years now,I want to thank you for your unconditional and undivided love. Thank you for all the laughs and all the good times we spent together through thick and thin, you have been the sunshine in my life. I can’t stop thinking about you! You are everything and very special to me! I love you!
                    </Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
        
    </Timeline>
    </div>
 
    )
  }
}
