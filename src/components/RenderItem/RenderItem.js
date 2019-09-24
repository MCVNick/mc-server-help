import React from 'react'

import './RenderItem.scss'

const RenderItem = ({id, meta, name, price}) => {
    return (
        <article className='single-item'>
            <div>
                <img src={`/api/items/image?id=${id}&meta=${meta}`} alt={`${id}-${meta}`}/>
            </div>
            <section>
                <h1>{name}</h1>
                {price !== '0B' && <h1>{price}</h1>}
            </section>
        </article>
    )
}

export default RenderItem
