export function Select({ handleChange }) {
  return (
    <select className='am-select' onChange={handleChange} defaultValue=''>
      <option value='' disabled>Select your blood type</option>
      <option value='A+'>A+</option>
      <option value='A-'>A-</option>
      <option value='B+'>B+</option>
      <option value='B-'>B-</option>
      <option value='AB+'>AB+</option>
      <option value='AB-'>AB-</option>
      <option value='O+'>O+</option>
      <option value='O-'>O-</option>
    </select>
  );
}
