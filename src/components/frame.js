import React, { Component } from 'react';
import '../css/components/frame.css';

import Button from './button.js';
import { URL } from '../secret.js'

class Frame extends Component {
    state = {
        videos: [],
        title: ""
    };

    fetch_videos = () => {
        return fetch(URL)
            .then(res => res.json())
            .then(json => { 
                this.setState({
                    videos: [...this.state.videos, ...json.items],
                    token: json.nextPageToken 
                });
            })
            .then( () => { this.select_video() } );
    };

    select_video = () => {
        let random_int = Math.ceil(Math.random() * this.state.videos.length);
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
        // console.log('Song Title is:', this.state.title);
        // console.log('Selector is:', this.state.selector);
        // console.log('Total videos is:', this.state.videos.length);
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