import PlaylistVideoItem from '@/components/playlist-video-item'
import { Video } from '@/interfaces/video'

export default async function PlaylistsIdPage({ params }: {
  params: { id: number }
}) {
  const { id } = params

  let res = await fetch("http://localhost:3000/api/playlists")
  const playlists = await res.json()
  
  res = await fetch("http://localhost:3000/api/videos")
  const videos = await res.json()

  if (id in playlists) {
    const playlist = playlists[id]
    const filteredVideos = videos.filter((video: Video) => {
      if (playlist.videoIds.includes(video.id)) {
        return video
      }
    })

    const videoElements = filteredVideos.map((video: Video, index: number) => {
      return (
        <PlaylistVideoItem video={video} key={index} />
      )
    })

    return (
      <>
        <h1>{playlist.name}</h1>
        {videoElements}
      </>
    )
  } else {
    return (
      <>
        Playlist does not exist
      </>
    );
  }
};
