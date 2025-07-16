import { useState } from 'react';

export function Message() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <button onClick={() => setShowMessage(!showMessage)}>Show Message</button>
      {showMessage && <p>Hi! This is the Message 😎</p>}
    </>
  );
}
