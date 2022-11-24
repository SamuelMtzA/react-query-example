import axios from "axios"

const productAPI = axios.create({
  baseURL: "http://localhost:3001/products"
})

const getProducts = async() =>{
  const res = await productAPI.get('/')
  return res.data;
}

const postProduct = async (product) =>{
  return await productAPI.post('/', product)
}

const deleteProduct = async (id) =>{
  return await productAPI.delete(`/${id}`)
}

export {
  getProducts,
  postProduct,
  deleteProduct
}
