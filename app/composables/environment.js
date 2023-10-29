export default function useBaseUrl(){
    const config = useRuntimeConfig()
    return config.public.base_url;
}