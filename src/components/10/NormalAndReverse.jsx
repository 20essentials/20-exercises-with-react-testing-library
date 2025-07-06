import { useState } from 'react';

export function NormalAndReverse({
  data = [
    { productName: 'Apple iPhone' },
    { productName: 'Tide laundry detergent' },
    { productName: 'Nike Air Jordans' }
  ]
}) {
  const [reversed, setReversed] = useState(false);

  const handleClick = () => {
    setReversed(prev => !prev);
  };

  const orderedData = reversed ? [...data].reverse() : data;

  return (
    <div>
      <button className='normal-and-reverse' onClick={handleClick}>
        {reversed ? 'Normal' : 'Reverse'}
      </button>
      <ul>
        {orderedData.map((product, index) => (
          <li key={index} data-testid='product-name'>
            {product.productName}
          </li>
        ))}
      </ul>
    </div>
  );
}
