import React from 'react'
import { useDispatch } from 'react-redux'
import { double } from '../slices/countSlice'

const Double = () => {
    let dispatch = useDispatch()
  return (
      <>
          <button onClick={() => dispatch(double())} className="my-20px">
              Double
          </button>
      </>
  );
}

export default Double
