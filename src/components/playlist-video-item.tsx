"use client"
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Video } from '../interfaces/video';
import AddVideoButton from './video-add-button';


interface VideoItemProps {
  video: Video;
}

export default function PlaylistVideoItem(props: VideoItemProps) {
  const { video } = props;

  function deleteVideo() {
    console.log("Delete video from playlist")
  }

  return (
    <Row>
      <Col xs='12' md='3' className='mb-3'>
        <Image fluid rounded src={`${video.thumbnail}?size=small`} alt={video.name} className='w-100' />
      </Col>
      <Col xs='12' md='9' className='mb-3'>
          <Row>
            <h2 className='h4'>{video.name}</h2>
            <p>{video.description}</p>
          </Row>
          <Row>
            <Col>
              <AddVideoButton video={video} />
            </Col>
            <Col className='d-flex justify-content-end'>
              <Button variant="danger" onClick={deleteVideo}>Delete</Button>
            </Col>
          </Row>
      </Col>
    </Row>
  )
}