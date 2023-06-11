import React from 'react'

type ProductByIdI = {
  count: number
  description:string
  price:number
  productName: string
  reviews: []
  user: string
  _id:string
}
type Item = {
  item : ProductByIdI
}
const ProductInfo: React.FC<Item> = ({item}) => {

  return (
    <div className='w-1/3 px-4'>
        <h1> {item?.productName} </h1>
        <h1> {item?.description} </h1>
        <h3>{item?.reviews.length} Reviews</h3>
    </div>
  )
}

export default ProductInfo