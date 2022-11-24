import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { postProduct } from '../api/productsAPI';

export const ProductForm = () => {

  const queryClient = useQueryClient();
  const addProductMutation = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
    const formData =  new FormData(e.target);
    const product  = Object.fromEntries(formData);
    addProductMutation.mutate({
      ...product,
      inStock: true,
      quantity: 1
    })
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="description" />

      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" />

      <button>
        Add Product
      </button>
    </form>
  )
}
