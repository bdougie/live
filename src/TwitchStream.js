import React from 'react';

export function TwitchStream() {
  return (
    <div class="twitch">
      <div class="twitch-video">
        <iframe
          src="https://player.twitch.tv/?channel=bdougieYO&mutualfun.live&autoplay=false"
          frameborder="0"
          allowFullScreen="true"
          scrolling="no"
          height="100%"
          width="100%"></iframe>
      </div>
      <div class="twitch-chat">
        <iframe
          frameborder="0"
          scrolling="no"
          id="bdougieYO>"
          src="https://www.twitch.tv/embed/bdougieYO/chat?parent=mutualfun.live"
          height="100%"
          width="100%"></iframe>
      </div>
    </div>
  );
}

export function TwitchVOD() {
  return (
    <div class="twitch">
      <div class="twitch-vod">
      <iframe
        src="https://player.twitch.tv/?video=609100617&parent=streamernews.example.com&autoplay=false"
        height="100%"
        width="100%"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true"></iframe>
    </div>
    </div>
  );
}
