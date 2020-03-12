import React from 'react'

const Checkbox = ({ checked, onChange }) => {
  return <label>
    Favourite
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  </label>
}

export default Checkbox