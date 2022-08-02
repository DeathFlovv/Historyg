const audioList = document.querySelectorAll("audio")
let currentAudio

Array.prototype.forEach.call(audioList, audio => {
  audio.addEventListener("play", e => {
    if (currentAudio) currentAudio.pause()
    currentAudio = e.target
  })
})

var audio = document.getElementsByTagName("audio");
for (let i = 0; i < audio.length; i++) {
  audio[i].addEventListener("ended", function() {
    if (audio[i].duration === audio[i].currentTime) {
      audio[i + 1].play();
    }
  });
}