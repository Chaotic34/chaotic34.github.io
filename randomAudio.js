// Define an array with the names of audio files in the folder
const audioFiles = [
    "One Summer's Day.opus",
    "Across the Stars.opus",
    "Arabesque.opus",
    "Sabbath.opus",
    "sparkle.opus",
    "Theme Of Mitsuha.opus",
    "Watashi no Uso.opus"
    // Add more audio file names here
];

// Function to choose a random audio file
function getRandomAudio() {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    return `music/${audioFiles[randomIndex]}`;
}

// Set up the audio element
const audioElement = document.createElement("audio");
audioElement.src = getRandomAudio();
audioElement.autoplay = true;
audioElement.loop = true;

document.body.appendChild(audioElement);
