import React from 'react';
import '../css/components/noframe.css';

const NoFrame = props => {
    return (
        <span 
            className="majestic-frame"
            onClick={props.onClick}> 
                <svg 
                    className="arrow"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="200" 
                    height="200" 
                    viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
        </span>
    );
};

export default NoFrame;