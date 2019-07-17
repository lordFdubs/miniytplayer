// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var pausedState = false;
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'hHW1oY26kxQ',
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function pause() {
  if(pausedState){
    player.playVideo();
    pausedState = false;
  }else{
    player.pauseVideo();
    pausedState = true;
  }
}


// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

globalShortcut.register('Space', () => {
  pause();
})
