import React from 'react'

export default function Product(props) {
    console.log(props);
  return (
    <>
        <div className="product w-75 p-3 rounded-5">
    <h2>{props.title}</h2>
    <p className='mt-3'>{props.desc}</p>
</div>
    </>

  )
}
