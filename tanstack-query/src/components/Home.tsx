import MusicList from './MusicList';

export default function Home() {
  return (
    <main style={{ display: 'flex' }}>
      <MusicList />
      <MusicList />
    </main>
  );
}
