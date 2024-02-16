import { defineStore } from 'pinia'

export const useMyProductStore = defineStore('myProduct',() =>{
  const product = ref();

  const setProduct = (data?: any) => (product.value = data);


  async function fetchProduct() {
    try {
      const { refresh, data: res} = await useFetch<any>("https://65cc67f3dd519126b83e656a.mockapi.io/product", {
        method: "GET",
      })
      setProduct(res);
      refresh()
    } catch (error) {
      console.log(error);
    }
  }

  async function postProduct(data:any) {
    try {
      const res = await $fetch<any>("https://65cc67f3dd519126b83e656a.mockapi.io/product", {
        method: "POST",
        body: data
      })
      setProduct(res);
    } catch (error) {
      
    }
  }

  return {
    product,
    setProduct,
    fetchProduct,
    postProduct
  }
})
