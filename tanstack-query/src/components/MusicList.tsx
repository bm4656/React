import { useEffect, useState } from 'react';

type Music = { title: string; singer: string; id: string };
export default function MusicList() {
  const [musics, setMusics] = useState<Music[]>();
  const getMuscis = async () => {
    await fetch(`data/musics.json`)
      .then((res) => res.json())
      .then((data: Music[]) => {
        console.log('데이터 받아옴');
        setMusics(data);
      });
  };
  useEffect(() => {
    console.log('fetching....');
    getMuscis().catch((e) => console.log('에러발생!', e));
  }, []);
  return (
    <>
      <h2>MUSIC LIST</h2>
      <ul>
        {musics &&
          musics.map((item) => (
            <li key={item.id}>
              <article>
                <p>
                  {item.title} - {item.singer}
                </p>
              </article>
            </li>
          ))}
      </ul>
    </>
  );
}
