import { Playlist } from "@/interfaces/playlist";
import { Video } from "@/interfaces/video";
import fs from "fs";

// playlists in JSON file for simplicity, store in a db for production applications
let playlists = require('../common/db/playlists.json');

function create(playlist: Playlist) {
    // generate new playlist id
    playlist.id = playlists.length ? Math.max(...playlists.map((playlist:Playlist) => playlist.id)) + 1 : 1;

    // add and save playlist
    playlists.push(playlist);
    saveData();
}

function addVideo(playlistId: number, videoId: number) {
    const playlist = playlists.find((playlist: Playlist) => playlist.id === playlistId)
    console.log(playlist)
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id: number) {
    // filter out deleted playlist and save
    playlists = playlists.filter((playlist: Playlist) => playlist.id.toString() !== id.toString());
    saveData();
}

// private helper functions
function saveData() {
    fs.writeFileSync('data/playlists.json', JSON.stringify(playlists, null, 4));
}

export const playlistsCRUD = {
    getAll: () => playlists,
    // getById: id => playlists.find(x => x.id.toString() === id.toString()),
    addVideo,
    create,
    delete: _delete
};