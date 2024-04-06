import NewPlaylistBtn from '@/components/newplaylist-btn';
import { PlaylistItem } from '@/components/playlist-item';
import { Playlist } from '@/interfaces/playlist';

export default async function PlaylistsPage() {
  let res = await fetch("http://localhost:3000/api/playlists")
  const playlists = await res.json()
  
  const playlistElements = playlists.map((playlist: Playlist, index: number) => {
    return (
      <PlaylistItem playlist={playlist} key={index} index={index}/>
    )
  })

  return (
    <>
      <div className='d-flex flex-row justify-content-between'>
        <h1>Playlists</h1>
        <div>
          <NewPlaylistBtn  />
        </div>
      </div>
      {playlistElements}
    </>
  );
}