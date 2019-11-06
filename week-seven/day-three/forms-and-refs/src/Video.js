import React, { Component } from "react";

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.myVideo = React.createRef();
  }
  render() {
    return (
      <div className="container is=fluid">
        <video ref={this.myVideo} width="960" height="480">
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div>
          <button
            onClick={() => {
              this.myVideo.current.play();
            }}
          >
            Play
          </button>
          <button
            onClick={() => {
              this.myVideo.current.pause();
            }}
          >
            Pause
          </button>
        </div>
      </div>
    );
  }
}
