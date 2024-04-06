import VideoItem from "@/components/video-item"
import { Video } from "@/interfaces/video"

export default async function VideosPage() {
  const res = await fetch("http://localhost:3000/api/videos")
  const videos = await res.json()
  
  const videoElements = videos.map((video: Video, index: number) => {
    return (
      <VideoItem video={video} key={index} />
    )
  })

  return (
    <>
      <h1>Videos</h1>
      {videoElements}
    </>
  );
}