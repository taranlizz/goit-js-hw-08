import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new VimeoPlayer('vimeo-player');
const PLAYER_LS_KEY = 'videoplayer-current-time';
const currentTime = getCurrentTimeFromLS();

player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.setCurrentTime(currentTime);

function onTimeUpdate(data) {
  localStorage.setItem(PLAYER_LS_KEY, JSON.stringify(data));
}

function getCurrentTimeFromLS() {
  try {
    return JSON.parse(localStorage.getItem(PLAYER_LS_KEY)).seconds;
  } catch {
    return 0;
  }
}
