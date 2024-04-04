'use client'
import VideoItem from "@/components/video-item"
import { useEffect, useState } from "react"

export default function VideosPage() {
  const [videos, setvideos] = useState([])

  useEffect(() => {
    fetch("/api/videos")
      .then(res => res.json())
      .then(data => setvideos(data))
  }, [])
  
  const videoElements = videos.map((video, index) => {
    return (
      <VideoItem video={video} key={index} />
    )
  })

  console.log(videos)
  return (
    <>
      <h1>Videos</h1>
      {videoElements}
    </>
  );
}