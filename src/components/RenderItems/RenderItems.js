import React, { useEffect, useState } from 'react'
import RenderItem from '../RenderItem/RenderItem'
import axios from 'axios'

const RenderItems = () => {
    let [items, setItems] = useState()
    let itemComponentList = []
    
    useEffect(() => {
        async function fetchData(search = '') {
            const result = await axios.get(`/api/items?search=${search}`)

            setItems(result.data)
        }
        
        fetchData()
    }, [])

    return (
        <div>
            {
                items ? items.forEach(({id, meta, name, price}) => {
                    itemComponentList.push(<RenderItem key={`${id}-${meta}`} id={id} meta={meta} name={name} price={price}/>)
                    return null
                }) : null
            }
            {
                itemComponentList
            }
        </div>
    )
}

export default RenderItems