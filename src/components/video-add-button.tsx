"use client"
import { Video } from '@/interfaces/video';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Playlist } from '@/interfaces/playlist';

interface VideoItemProps {
    video: Video;
}

export default function AddVideoButton(props: VideoItemProps) {
    const { video }= props
    const [playlists, setPlaylists] = useState<any>([])

    useEffect(() => {
        fetch("http://localhost:3000/api/playlists")
            .then(res => res.json())
            .then(data => setPlaylists(data))
    })

    function onClick() {
        console.log("add to playlist")
    }

    const dropDownElements = playlists.map((playlist: Playlist, index: number) => {
        return (
            <Dropdown.Item 
                onClick={onClick}
                key={index}
            > 
                {playlist.name}
            </Dropdown.Item>
        )
    })

    return (
        <DropdownButton 
            id="add-to-playlist-btn" 
            title="Add to Playlist"
        >
            {dropDownElements}
        </DropdownButton>
    )
}