import React, { forwardRef } from "react";

const Video = forwardRef((props, ref) => {
  return (
    <div>
      <video ref={ref} src="/test.mp4" width="500" height="500" />
    </div>
  );
});

Video.displayName = "Video";

export default Video;
