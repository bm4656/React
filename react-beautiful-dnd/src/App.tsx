import React from 'react';
import './App.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png',
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: '/images/cato.png',
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: '/images/kvn.png',
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: '/images/mooncake.png',
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: '/images/quinn.png',
  },
];

const handleOnDragEnd = () => {};
export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='characters'>
            {(provided) => (
              <ul
                className='characters'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {finalSpaceCharacters.map(({ id, name, thumb }) => {
                  return (
                    <li key={id}>
                      <div className='characters-thumb'>
                        <img src={thumb} alt={`${name} Thumb`} />
                      </div>
                      <p>{name}</p>
                    </li>
                  );
                })}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}
