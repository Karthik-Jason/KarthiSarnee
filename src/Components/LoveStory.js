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
        <div>
    <div id="timeline">
        <div>
            <h9 id="heading">OUR STORY</h9>
            <br></br><br></br>
            <hr style={{height:'1px',color:'black',width:'80%',backgroundColor: 'black'}}/>
            <br></br>
        </div>
    <Timeline align="alternate">
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="h4" color="inherit">
                    2018
                </Typography>
                <img id="timelinephotos" src={firstmeet} alt="Some awesome text"/>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='inherit'>
                    <ChurchTwoTone />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper id="leftpapers" elevation={24}>
                    <Typography id="leftheading" variant="h3">
                       OUR FIRST MEET
                    </Typography>
                    <Typography id="leftpara" variant="h5">
                    We met in 2009, at a church's education centre as kids but we have no idea at the time that we are made for each others, almost after a decade, In 2017 we met in a christmas celebration and slowly we started to know and love each other in 2018!
                    </Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="h4" color="inherit">
                    2021
                </Typography>
                <img id="timelinephotos" src={proposal} alt="Some awesome text"/>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='inherit'>
                    <ParkSharpIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper id="righttpapers" elevation={24}>
                    <Typography id="rightheading" variant="h3">
                    OUR JOURNEY
                    </Typography>
                    <Typography id="rightpara" variant="h5">
                    When God send you the right partner. your heart will know it and you will be at peace around that person. We both are exactly feeling the same for past six years, We can't stop think about each others. We wish that this unconditional love and peace will be with us forever for the rest of our life.
                    </Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="h4" color="inherit">
                    2024
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
                        NOW
                    </Typography>
                    <Typography id="leftpara" variant="h5">
                        We grew together as a happy couple for almost six years now, We want to thank God for the unconditional and undivided love and also for all the good times we spent together through thick and thin. After lot of struggles, We've made it to our wedding!
                    </Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
        
    </Timeline>
    </div>
    </div>
    )
  }
}
