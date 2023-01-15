import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState(initialData);
  const handleChange = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson(person => ({
      ...person,
      mentors: person.mentors.map(mentor => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    setPerson(person => ({
      ...person,
      mentors: person.mentors.filter(m => m.name !== name),
    }));
  };
  const handleAdd = () => {
    const name = prompt(`누구를 추가하고 싶은가요?`);
    const title = prompt(`직무가 뭔가요?`);
    setPerson(person => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleChange}>멘토의 이름을 바꾸기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
    </div>
  );
}

const initialData = {
  name: 'bm',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '숀',
      title: '시니어개발자',
    },
  ],
};
