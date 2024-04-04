'use client'
import VideoItem from '@/components/video-item'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PlaylistsIdPage({ params }: {
  params: { id: number }
}) {
  const { id } = params
  const [playlists, setPlaylists] = useState([])
  const [videos, setvideos] = useState([])

  useEffect(() => {
    fetch("/api/playlists")
      .then(res => res.json())
      .then(data => setPlaylists(data))

    fetch("/api/videos")
      .then(res => res.json())
      .then(data => setvideos(data))
  }, [])

  if (id in playlists) {
    const playlist = playlists[id]
    const filteredVideos = videos.filter((video) => {
      if (playlist.videoIds.includes(video.id)) {
        return video
      }
    })

    const videoElements = filteredVideos.map((video, index) => {
      return (
        <VideoItem video={video} key={index} />
      )
    })

    return (
      <>
        <h1>Playlist {id}</h1>
        {videoElements}
      </>
    )
  }

  return (
    <>
      Playlist does not exist
    </>
  );
};
