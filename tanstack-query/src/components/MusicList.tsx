import { useEffect, useState } from 'react';

type Music = { title: string; singer: string; id: string };
export default function MusicList() {
  const [musics, setMusics] = useState<Music[]>();
  const [checked, setChecked] = useState(false);

  const getMuscis = async () => {
    await fetch(`data/${checked ? 'new_' : ''}musics.json`)
      .then((res) => res.json())
      .then((data: Music[]) => {
        console.log('💡데이터 받아옴');
        setMusics(data);
      });
  };
  useEffect(() => {
    console.log('fetching...');
    getMuscis().catch((e) => console.log('에러발생!', e));
  }, [checked]);
  return (
    <div style={{ display: 'flex', 'flex-direction': 'column' }}>
      <h2>MUSIC LIST</h2>
      <label>
        <input
          type='checkbox'
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
        New Musics 🎧
      </label>
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
    </div>
  );
}
