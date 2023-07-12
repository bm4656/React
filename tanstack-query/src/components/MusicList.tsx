import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

type Music = { title: string; singer: string; id: string };
export default function MusicList() {
  const [checked, setChecked] = useState(false);

  const { data: musics } = useQuery<Music[]>({
    queryKey: ['musics', checked],
    queryFn: async () => {
      const res = await fetch(`data/${checked ? 'new_' : ''}musics.json`);
      console.log('💡데이터 받아옴');
      return res.json();
    },
  });
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
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
