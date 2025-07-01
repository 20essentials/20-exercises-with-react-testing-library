export function Input({ handleChange }) {
  return <input type='text' placeholder="Your Name..." onChange={handleChange} defaultValue={''}></input>;
}
