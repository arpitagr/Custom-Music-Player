/** Function for Playing the current Music Starts **/
function playSong() 
{
	song.src = songs[currentSong];
	songTitle.textContent = songs[currentSong]; 
	$("#image img").attr("src",poster[currentSong]); 
	$("#bg img").attr("src",poster[currentSong]);
}
/** Function for Playing the current Music Ends **/

/** Function for Play & Pause The Music Starts **/
function playOrPauseSong()
{
	if (song.paused) 
	{
		song.play();
		playOrPauseBtn.innerHTML = "<i class='fas fa-pause'></i>";
	}
	else
	{
		song.pause();
		playOrPauseBtn.innerHTML = "<i class='fas fa-play'></i>";
	}
}
/** Function for Play & Pause The Music Ends **/

/** Function for Mute & Unmute The Music Starts **/
function muteUnmute()
{
	if (song.muted==false) 
	{
		song.muted=true;
		muteUnmuteBtn.innerHTML = "<i class='fa fa-volume-mute'></i>";
	}
	else
	{
		song.muted = false;	
		muteUnmuteBtn.innerHTML = "<i class='fas fa-volume-up'></i>";
	}
}
/** Function for Mute & Unmute The Music Ends **/

/** Function for Previous Audio Music Starts **/
function pre()
{
	currentSong--;
	if (currentSong<0) 
	{
		currentSong=0;
	}
	playSong();
	song.play();
	playOrPauseBtn.innerHTML = "<i class='fas fa-pause'></i>";
}
/** Function for Previous Audio Music Ends **/

/** Function for Next Audio Music Starts **/
function next()
{
	currentSong++;
	if (currentSong>songs.length-1) 
	{
		currentSong=0;
	}
	playSong();
	song.play();
	playOrPauseBtn.innerHTML = "<i class='fas fa-pause'></i>";

}
/** Function for Next Audio Music Ends **/

/** Function for Converting Current Music time and Total Duration of Music Starts **/
function time_arrange(totalDuration) 
{
var minutesTotal = Math.floor(totalDuration/60);   
var secondsTotal = Math.floor(totalDuration); 

if (secondsTotal>59) 
{
	secondsTotal = secondsTotal%60;
	if (secondsTotal<10) 
	{
		secondsTotal = '0' + secondsTotal;
	}
} 
else if (secondsTotal<10) 
{
	secondsTotal = '0' + secondsTotal;
}
if (minutesTotal<10) 
{
	minutesTotal = '0' + minutesTotal;
}
totalDuration = minutesTotal + ':' + secondsTotal;
return totalDuration;
}
/** Function for Converting Current Music time and Total Duration of Music Endss **/