import useBaseUrl from './environment';

export const  useFetchAll = async (searchUrl) =>{
    const url = ref(useBaseUrl() + searchUrl)
   const {data,pending,error} = await useFetch(url.value,{
        watch:[url]
    })
    return {data,pending,error}
}   