import React from 'react'

export const ButtonTypeMeals = ({onclTypes,type}) => {
  return (
    <button className='btn btn-type' onClick={(e)=>onclTypes(e.target.textContent)}>{type}</button>
  )
}
