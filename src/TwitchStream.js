import React from 'react';

export function TwitchStream() {
  return (
    <div className="twitch">
      <div className="twitch-video">
        <iframe
          src="https://player.twitch.tv/?channel=bdougieYO&parent=www.bdougie.live&parent=localhost&parent=bdougie.live&autoplay=false"
          frameBorder="0"
          allowFullScreen={true}
          scrolling="no"
          height="100%"
          width="100%"></iframe>
      </div>
      <div className="twitch-chat">
        <iframe
          frameBorder="0"
          scrolling="no"
          id="bdougieYO>"
          src="https://www.twitch.tv/embed/bdougieYO/chat?parent=localhost&parent=www.bdougie.live&parent=bdougie.live"
          height="100%"
          width="100%"></iframe>
      </div>
    </div>
  );
}

export function TwitchVOD() {
  return (
    <div className="twitch">
      <div className="twitch-vod">
        <iframe
          src="https://player.twitch.tv/?video=609100617&parent=streamernews.example.com&autoplay=false"
          height="100%"
          width="100%"
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}></iframe>
      </div>
    </div>
  );
}
