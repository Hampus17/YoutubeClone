import React from 'react';


const VideoDetails = ({ video }) => {
    if (!video)
        return <div id="loadingVids">Search for a video...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(videoSrc);

    return (
        <div id="videoCard">
            <div id="videoPlayer">
                <iframe title="Video Player" src={videoSrc}></iframe>
            </div>
            <div id="videoInfo">
                <h4>{video.snippet.title}</h4>
                <p className="chanTitle">{video.snippet.channelTitle}</p>
                <p className="desc">{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetails;