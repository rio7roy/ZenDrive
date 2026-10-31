# ZENDRIVE

All eight MP3 files you supplied are INCLUDED in their climate folders. The game works by extracting this ZIP and **double-clicking `index.html`** in Chrome or Edge, without Python or a local server. Keep the `music` directory beside `index.html` (do not open `index.html` from within the ZIP preview).

## Play
1. Right-click the downloaded ZIP and select **Extract All**.
2. Open the extracted `ZENDRIVE_DoubleClick_Ready` folder.
3. Double-click **index.html** and choose **PLAY** in the browser.
4. Choose a climate on the game's phone. Its bundled music will play. Press **N** to shuffle another track when a climate has multiple songs.

### Important: Internet is still required to load the 3D engine
The game uses the free Three.js r128 rendering library from a CDN. Your own MP3s play locally and do **not** require internet, but the 3D game needs internet access to download Three.js unless you've separately supplied a local copy of the engine. This package has a fallback across three CDNs. No server is necessary.

## Climate songs bundled
- `dawn` — `music/dawn/Roary.mp3`
- `golden-hour` — `music/golden-hour/Golden_hour.mp3`
- `misty-forest` — `music/misty-forest/Chubina.mp3`
- `midnight-rain` — `music/midnight-rain/DC.mp3`
- `starlit-calm` — `music/starlit-calm/Missing.mp3`
- `snowfall` — `music/snowfall/Leanin.mp3`
- `neon-overdrive` — `music/neon-overdrive/Flamings.mp3`
- `midnight-city` — `music/midnight-city/SimpsonWave1995.mp3`

## Sky pulsing
For direct `file://` opening, the sky follows a precomputed bass/beat envelope derived from each provided MP3. This keeps sound audible and gives musical sky motion without the local-origin restrictions on Web Audio analysis. On GitHub Pages/localhost, the game uses its live spectrum analyser instead. The beat envelopes are stored in `music/beatmaps.js` and do not contain audio.

## Adding more songs
Place another MP3 into the relevant `music/<climate>/` folder, then add another `{ file: "music/.../new.mp3", title: "...", artist: "..." }` entry in `music/library.js`. The game will randomly select a song in that climate. Additional songs won't have precomputed beat maps in direct-file mode unless you generate them; the game will use a gentle fallback pulse for those songs. Playback itself still works.

## Publish with GitHub Pages
Upload this folder's contents to a GitHub repo and enable **Settings → Pages → Deploy from branch → main → / (root)**. Be sure you have redistribution rights for any songs you publish publicly. GitHub Pages may impose usage and file size limits; the eight supplied MP3s total about 57 MB.

## Troubleshooting
- If the page says the 3D engine could not load, connect to the internet and reload. The MP3s are already present, but Three.js is loaded via a CDN.
- If the game starts but songs won't play, press the on-screen PLAY button to satisfy autoplay policies, and check the Console for an error from the game.
- Windows may hide filename extensions: the audio files must remain `.mp3` and the `music` folder must stay alongside `index.html`.


## Audio mixer and song fades

Open **CONTROLS** from the main or pause menu. The **Vehicle sound** and **Music** sliders control independent channels (0–100%); they retain their settings in browsers that allow local storage. Vehicle sound includes engine, tyre, wind, weather, collisions and other game effects. Music includes the MP3 playlists and generated fallback soundtrack. The pause-menu **SOUND** switch mutes/unmutes both without changing the slider settings.

Songs fade in over about **2.1 seconds**. Selecting another climate or pressing **N** fades out the current song over **1.15 seconds** before fading in the next. Songs also fade out naturally during their last **2.6 seconds** before the next random track plays. MP3s still work by double-clicking `index.html` (internet is needed for the 3D engine).
