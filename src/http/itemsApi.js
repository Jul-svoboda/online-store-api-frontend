import { $host, $authHost } from ".";

export const createType = async (type) => {
    const response = await $authHost.post('api/type', type)
    const {data} = response
    return data
}

export const fetchTypes = async () => {
    const response = await $host.get('api/type', )
    const {data} = response
    return data
}

export const createBrand = async (brand) => {
    const response = await $authHost.post('api/brand', brand)
    const {data} = response
    return data
}

export const fetchBrands = async () => {
    const response = await $host.get('api/brand', )
    const {data} = response
    return data
}

export const createItem = async (item) => {
    const response = await $authHost.post('api/item', item)
    const {data} = response
    return data
}

export const fetchItems = async (typeId, brandId, page, limit=5) => {
    const response = await $host.get('api/item', {params: {
        typeId, brandId, limit, page
    }})
    const {data} = response
    return data
}

export const fetchOneItem = async (id) => {
    const response = await $host.get(`api/item/${id}`, )
    const {data} = response
    return data
}