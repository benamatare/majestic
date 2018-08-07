import React, { Component } from 'react';
import '../css/components/frame.css';

import Button from './button.js';
import { API_KEY, PLAYLIST_ID } from '../secret.js'

// API URL Path for videos 
const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;

class Frame extends Component {
    state = {
        first_load: false,
        videos: [],
        title: "",
    };

    fetch_videos = () => {
        if(this.state.videos.length < 50 && this.state.first_load === false){
            // Sets the initial videos, which is always 50
            return fetch(URL)
            .then(res => res.json())
            .then(json => { 
                this.setState({
                    first_load: true,
                    videos: json.items,
                    token: json.nextPageToken 
                });
            }).then( () => { this.select_video() } );
        } else {
            // Grabs the next batch of 50 videos
            return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&pageToken=${this.state.token}&playlistId=${PLAYLIST_ID}&key=${API_KEY}`)
            .then(res => res.json())
            .then(json => { 
                this.setState({
                    videos: [...this.state.videos, ...json.items],
                    token: json.nextPageToken 
                });
            }).then( () => { this.select_video() } );
        };
        // Need to add catch's for when we get a 404, or a video that is blocked?
        // Also for when there is no more page token otherwise you are going to crash my app :'(  
    };
    
    select_video = () => {
        let random_int = Math.ceil(Math.random() * this.state.videos.length)
        this.setState({
            selector: this.state.videos[random_int].snippet.resourceId.videoId,
            title: this.state.videos[random_int].snippet.title
        });
    };

    render_iframe = id => {
        return(
            <div className="frame-video"> 
                <iframe
                    title="video-title"
                    type="text/html"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1;enablejsapi=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&color=white&showinfo=0&autoplay=1`}
                    border="0"
                    frameBorder="0"
                    allow="autoplay ;encrypted-media">
                </iframe>
            </div>
        );
    };

    componentDidMount(){
        this.fetch_videos()
    };

    render(){
        // Jsut for your reference
        console.log('Current song is, ', this.state.title);
     return(
         <div className="frame-container"> 
            <h3 className="frame-song-title"> {this.state.title} </h3>
            { this.render_iframe(this.state.selector) }
            <Button className={"frame-next"} onClick={this.fetch_videos} />
         </div>
     );
    };
};

export default Frame;