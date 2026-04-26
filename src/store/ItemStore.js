import {makeAutoObservable} from "mobx"

export default class ItemStore {
    constructor() {
        this._types = [
            {id: 1, name: 'stul'},
            {id: 2, name: 'divan'},
            {id: 3, name: 'stol'},
            {id: 4, name: 'bads'},
        ]
        this._brands = [
            {id: 1, name: 'ikea'},
            {id: 2, name: 'obi'},
        ]
        this._items = [
            {id: 1, name: 'divanIkea', price: 2500, rating: 4, img: `C:/testpostman/360_F_975084524_1aTorkFPo1iWbXKB736zLxH0aiWcwxU1.jpg`},
            {id: 2, name: 'divanObi', price: 2500, rating: 3, img: `C:/testpostman/pryamoj-divan-1.jpg`},
            {id: 3, name: 'stulIkea', price: 2500, rating: 2, img: `C:/testpostman/97be36d0a58598cc64966fa4eff29eb4.jpg`},
            {id: 4, name: 'stulObi', price: 2500, rating: 5, img: `C:/testpostman/e44319435bbd0021da54ea7c6f422dd8.jpg`},
            {id: 5, name: 'divanIkea', price: 2500, rating: 4, img: `C:/testpostman/360_F_975084524_1aTorkFPo1iWbXKB736zLxH0aiWcwxU1.jpg`},
            {id: 6, name: 'divanObi', price: 2500, rating: 3, img: `C:/testpostman/pryamoj-divan-1.jpg`},
            {id: 7, name: 'stulIkea', price: 2500, rating: 2, img: `C:/testpostman/97be36d0a58598cc64966fa4eff29eb4.jpg`},
            {id: 8, name: 'stulObi', price: 2500, rating: 5, img: `C:/testpostman/e44319435bbd0021da54ea7c6f422dd8.jpg`},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setItems(items) {
        this._items = items
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get items() {
        return this._items
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}