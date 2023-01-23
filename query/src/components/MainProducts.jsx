import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import Products from './Products';

export default function MainProducts() {
  const client = useQueryClient();
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  return (
    <main className='container'>
      <div>
        {showLeftProducts && <Products />}
        <button onClick={() => setShowLeftProducts(show => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <Products />}
        <button onClick={() => setShowRightProducts(show => !show)}>
          Toggle
        </button>
      </div>
      <button onClick={() => client.invalidateQueries(['products', false])}>
        정보가 업데이트 됨!
      </button>
    </main>
  );
}
