import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="main-video video-detail col-md-8 col-sm-12 col-12">
      <div className="main-video__video embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="main-video__details details">
        <div className="main-video__title">{video.snippet.title}</div>
        <div className="main-video__desc">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
