# ZENDRIVE — Add your own climate music

This is a GitHub Pages-ready, static version of ZENDRIVE. No build tools or server backend are needed.

## Add songs

1. Copy your MP3 files into the climate subfolders under `music/`.
2. Open `music/library.js` in a text editor.
3. Add one `{ file, title, artist }` entry for each song. The `file` path is relative to `index.html`.

Example for two Dawn songs:

```js
window.ZENDRIVE_MUSIC = {
  dawn: [
    { file: "music/dawn/sunrise.mp3", title: "Sunrise", artist: "Rio" },
    { file: "music/dawn/morning-drive.mp3", title: "Morning Drive", artist: "Rio" },
  ],
  "golden-hour": [],
  "misty-forest": [],
  "midnight-rain": [],
  "starlit-calm": [],
  snowfall: [],
  "neon-overdrive": [],
  "midnight-city": [],
};
```

Keep all eight climate keys; don't rename the directories without also updating the file paths.
When you choose a climate on the in-game phone, ZENDRIVE randomly plays a track from that climate. N/Next shuffles to a different song in the same climate. When it ends, another is selected automatically. Empty climate playlists use the original generated music. The visual climate is still controlled by the phone. The real MP3 audio drives the sky's subtle beat pulse; generated fallback uses a rhythm approximation.

## GitHub Pages deployment

1. Create a GitHub repository (for example `zendrive`).
2. Upload the CONTENTS of this folder (not the outer folder itself) so `index.html` is at the repository root and `music/library.js` and the music subfolders are alongside it.
3. Go to **Settings > Pages > Build and deployment** and select **Deploy from a branch**, `main`, `/(root)`, then Save.
4. Your project will normally be served at `https://YOUR-USERNAME.github.io/zendrive/`.
5. To add or change music later, upload the audio files and edit `music/library.js`, then commit the changes.

The songs must be in the deployed repository. Merely referencing local Windows paths such as `C:\Music\song.mp3` does not work on GitHub Pages. File names are case-sensitive on GitHub Pages and should be kept lowercase with hyphens. Use audio that you have the right to distribute. Pages sites are publicly accessible.

## Local testing

Run `python -m http.server 8000` from this folder, then open `http://localhost:8000` in your browser. Click Play to unlock Web Audio (browser policy). The game requires an internet connection to load Three.js from its CDN.

## Troubleshooting

- **No song plays:** Check `music/library.js` is loaded and the file path matches (case-sensitive). Open DevTools > Network to look for HTTP 404s. Use MP3 for broad browser compatibility.
- **Only original generated music:** The selected climate has an empty playlist or a track could not be loaded. The game gracefully falls back to generated music.
- **Sky not reacting:** Make sure a real track is playing and audio isn't paused/muted. The beat effect is intentionally subtle.
- **Huge files:** Compress music before upload, e.g. MP3 at 128–192 kbps. GitHub has per-file and repository usage limits.
