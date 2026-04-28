import React from 'react'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../index'
import { Pagination } from 'react-bootstrap'

const Pages = observer( () => {
    const {item} = useContext(Context)
    const pageCount = Math.ceil(item.totalCount / item.limit)
    const pages = []

    for (let i = 0; i < pageCount; i+=1) {
        pages.push(i+1)
    }

    return (
        <Pagination className='mt-5'>
            {pages.map(page => 
                <Pagination.Item
                    active={item.pages === page}
                    onClick={() => item.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}

        </Pagination>
    )
    })

export default Pages