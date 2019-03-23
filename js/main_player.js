var songTitle = document.getElementById('songTitle');
var fillBar = document.getElementById('fill');
var playOrPauseBtn = document.getElementById('play');
var timeing = document.getElementById('timeing');
var muteUnmuteBtn = document.getElementById('mute');
var song = new Audio();
var currentSong = 0;
window.onload = playSong;
song.addEventListener('timeupdate',function()
{
	var position = song.currentTime / song.duration;
	fillBar.style.width = position*100 + '%';
	currtime = time_arrange(song.currentTime);
	totalDuration = time_arrange(song.duration);
	timeing.textContent  = currtime + '/' + totalDuration;
});