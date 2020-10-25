import React from 'react';

function TwitchStream() {
  return (
    <div className="flex flex-col h-full md:flex-row">
      <div className="flex-grow">
        <iframe
          src="https://player.twitch.tv/?channel=bdougieYO&parent=www.bdougie.live&parent=localhost&parent=bdougie-live.vercel.app&autoplay=false"
          frameBorder={0}
          allowFullScreen="true"
          scrolling="no"
          height="100%"
          width="100%"
          title="tw-video"
        />
      </div>
      <div>
        <iframe
          frameBorder={0}
          scrolling="no"
          id="bdougieYO>"
          src="https://www.twitch.tv/embed/bdougieYO/chat?parent=localhost&parent=www.bdougie.live&parent=bdougie-live.vercel.app"
          height="100%"
          width="100%"
          title="tw-chat"
        />
      </div>
    </div>
  );
}

export default TwitchStream;
