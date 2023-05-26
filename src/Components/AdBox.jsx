import React from 'react'
import babel from '../images/babel.png'

function AdBox() {
  return (
    <div className='border border-gray-300 rounded-lg max-w-full maxh-h-full mt-6'>
        <img src={"https://ncmagroup.files.wordpress.com/2019/09/advantages-of-newspaper-advertising-why-newspapers-are-still-king.jpg" ||babel} alt="advertisement box" className='object-cover rounded-lg' />
    </div>
  )
}

export default AdBox
