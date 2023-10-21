import React from 'react'

const CustomButton = ({title, type, customStyles, handleClick}) => {
  return (
    <button
      className={'px-2 py-1.5 flex-1 rounded-md'}  
    >
        {title}
    </button>
  )
}

export default CustomButton