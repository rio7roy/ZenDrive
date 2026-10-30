// ZENDRIVE custom climate playlists. This file works locally and on GitHub Pages.
// Upload your own MP3, M4A, or OGG files into the matching folders.
// Then add one object per file to the appropriate array.
// IMPORTANT: Use forward slashes, exact case, and paths RELATIVE TO index.html.
// For example, after adding music/dawn/sunrise.mp3:
//   { file: "music/dawn/sunrise.mp3", title: "Sunrise", artist: "My Music" },
// Multiple objects = random selection each time the climate is chosen.
// If an array is empty, ZENDRIVE plays its original generated soundtrack.
window.ZENDRIVE_MUSIC = {
  dawn: [
    // { file: "music/dawn/sunrise.mp3", title: "Sunrise", artist: "My Music" },
    // { file: "music/dawn/morning-breeze.mp3", title: "Morning Breeze" },
  ],
  "golden-hour": [
    // { file: "music/golden-hour/gold.mp3", title: "Golden", artist: "My Music" },
  ],
  "misty-forest": [
    // { file: "music/misty-forest/mist.mp3", title: "Misty Trail" },
  ],
  "midnight-rain": [
    // { file: "music/midnight-rain/night-rain.mp3", title: "Rainfall" },
  ],
  "starlit-calm": [
    // { file: "music/starlit-calm/stars.mp3", title: "Stars" },
  ],
  snowfall: [
    // { file: "music/snowfall/snow.mp3", title: "Snow" },
  ],
  "neon-overdrive": [
    // { file: "music/neon-overdrive/neon.mp3", title: "Neon" },
  ],
  "midnight-city": [
    // { file: "music/midnight-city/city.mp3", title: "City Lights" },
  ],
};
