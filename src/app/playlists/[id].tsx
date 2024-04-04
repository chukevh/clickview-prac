import { useRouter } from 'next/router';


export default function PlaylistsIdPage({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  console.log(data)

  return (
    <>
        Playlist goes here
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  // Fetch data for the specific post using slug
  const res = await fetch("/api/playlists");
  const data = await res.json();

  console.log(id)
  
  return {
    props: { data },
  };
}
