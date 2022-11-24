import React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteProduct, getProducts } from '../api/productsAPI'

export const Products = () => {
  const queryClient = useQueryClient();
  const { data: products, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    }
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  else if (isError) {
    return <div>Error: {error.message}</div>
  }
  // console.log(typeof data)


  return products.map(product => {
    return (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <button
          onClick={() => {deleteProductMutation.mutate(product.id)}}
          >Delete</button>
          <input type="checkbox"/>
          <label>In stock</label>
        </div>
    )
  })
}
