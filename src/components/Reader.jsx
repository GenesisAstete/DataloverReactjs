import React from 'react'
import harry from '../data/harry.json'

const Reader = () => {

    const data = harry

    return (
        <div>
             {data.map((item, i) => (
                <div key={i}>{item.name}</div>
              ))}
        </div>
    )
}

export default Reader
