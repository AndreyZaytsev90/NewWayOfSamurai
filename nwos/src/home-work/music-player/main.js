import songs from "./modules/songs.js";
import * as player from "./modules/player.js";
import {showPlaylist, /*showSong*/} from "./modules/display.js";
import {showSong as showSongDisplay} from "./modules/display.js";
import "./theme.js"


console.log("🎶 Добро пожаловать в музыкальный плеер!")

// Показываем весь плейлист
showPlaylist(songs)

// Включаем первую песню
player.showSong(songs[0])
player.play()

// Пауза
player.pause()

// Включаем вторую песню
showSongDisplay(songs[1])
player.play()

// Останавливаем
stop()