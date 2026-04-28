import { observer } from 'mobx-react-lite'
import React from 'react'
import { Context } from '..'
import { useContext } from 'react'
import { Card } from 'react-bootstrap'

const BrandBar = observer( () => {
    const { item } = useContext(Context)

    return (
        <div className='d-flex flex-row flex-wrap'>
            {item.brands.map(brand => 
                <Card
                    style={{cursor: 'pointer'}}
                    bg={brand.id === item.selectedBrand.id ? 'secondary' : 'light'}
                    onClick={() => item.setSelectedBrand(brand)}
                    key={brand.id}
                    className='p-3 me-3'
                >
                    {brand.name}
                </Card>
            )}
        </div>
    )
})

export default BrandBar