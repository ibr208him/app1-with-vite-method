import React from 'react'
import Product from '../product/Product'


export default function Products() {
const products=[
  {id:1,title:"product one",desc:"this is product one"},
  {id:1,title:"product two",desc:"this is product two"},
  {id:1,title:"product three",desc:"this is product three"}
];

  return (
    <>
    <div className="products d-flex flex-column align-items-center mt-4 pt-3 pb-3 bg-danger rounded-5 ">
      <h1 className='mb-5'> Our Products: </h1>

      { 

      products.map(function (product) {
        
        return <Product {...product} key={product.id}/>
     

      })
     
     }  

    </div>
    
    </>
  )
}
