import React from 'react'

const CustomButton = ({title, type, customStyles, handleClick}) => {
  return (
    <button
      className={'px-2'}  
    >
        {title}
    </button>
  )
}

export default CustomButton