const playlist = [
  { title: "Kendrick Lamar - Not Like Us.mp3", file: "music/Kendrick Lamar - Not Like Us.mp3",video: "media/leftygunplay.mp4"},
  { title: "Mike Sherm - AssHole.mp3", file: "music/Mike Sherm - AssHole.mp3" },
  { title: "LaRussell  - UFO's.mp3", file: "music/LaRussell  - UFO's.mp3" },
  { title: "Too Short - Gangstas& Strippas.mp3", file: "music/Too Short - Gangstas& Strippas.mp3" },
  { title: "Gin & Juice - Snoop Dogg.mp3", file: "music/Gin & Juice - Snoop Dogg.mp3" }
];

let current = 0;
const audio = new Audio(playlist[current].file);

function playSong() {
  audio.play();
  document.getElementById('now-playing').innerText = `Now Playing: ${playlist[current].title}`;
  function updateVideo(videoFile) {
    const video = document.getElementById("bg-video");
    const source = video.querySelector("source");
    source.src = videoFile;
    video.load(); // refresh the video source
    video.play(); // restart it
  }
  
  function playSong() {
    audio.src = playlist[current].file;
    audio.play();
    updateVideo(playlist[current].video); // sets background video
    document.getElementById('now-playing').innerText = `Now Playing: ${playlist[current].title}`;
  }
}

function pauseSong() {
  audio.pause();
}

function nextSong() {
  audio.pause();
  current = (current + 1) % playlist.length;
  audio.src = playlist[current].file;
  playSong();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function buildSongList() {
  const list = document.getElementById("song-list");
  playlist.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.style.cursor = "pointer";
    li.onclick = () => {
      current = index;
      playSong();
    };
    list.appendChild(li);
  });
}
window.addEventListener('load', () => {
  buildSongList();  // build list
});
