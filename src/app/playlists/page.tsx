'use client'
import { PlaylistItem } from '@/components/playlist-item';
import { useEffect, useState } from 'react';

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    fetch("/api/playlists")
      .then(res => res.json())
      .then(data => setPlaylists(data))
  }, [])
  
  const playlistElements = playlists.map((playlist, index) => {
    return (
      <PlaylistItem playlist={playlist} key={index} />
    )
  })

  console.log(playlists)
  return (
    <>
      <h1>Playlists</h1>
      {playlistElements}
    </>
  );
}