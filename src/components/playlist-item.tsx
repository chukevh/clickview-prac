import { Button, Col, Row } from 'react-bootstrap';
import { Playlist } from '../interfaces/playlist';
import Link from 'next/link';

interface PlaylistItemProps {
  playlist: Playlist;
  index: number;
}

export function PlaylistItem(props: PlaylistItemProps) {
  const { playlist, index } = props;

  const videoCount = playlist.videoIds.length === 1 ? '1 video' : `${playlist.videoIds.length} videos`;

  return (
    <Link href={`/playlists/${index}`} className='playlist-link'>
      <Row className='border rounded p-2 mb-2'>
        <Col xs='12' md='3'>
          <h2 className='h5'>{playlist.name}</h2>
          <p className='mb-0'>{videoCount}</p>
        </Col>
        <Col xs='12' md='9' className='d-flex justify-content-between'>
          <p className='mb-0'>{playlist.description}</p>
        </Col>
      </Row>
    </Link>
  )
}