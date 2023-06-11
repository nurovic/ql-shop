import React, {useState} from 'react'
import ListItem from '../../components/product/ListIem'
import { useQuery} from '@apollo/client';
import { GET_PRODUCTS } from '../../graphQl/Query/product'

const index = () => {
  const { error, loading, data } = useQuery( GET_PRODUCTS );
  return (
    <div className="container mx-auto mt-4 ">
      <div className="flex flex-wrap">
        {data?.products?.map((product) => {
          return <ListItem 
          product={product}
          key={product._id}
          />;
        })}
      </div>
    </div>
  );
}

export default index  