import './collection.preview.style.scss';
import React from 'react'

import CollectionItem from '../Collection item/collection-item.comp';


const CollectionPreview = ({items, title}) => ( 

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()} </h1>

        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => ( 
                    <CollectionItem key={id} {...otherItemProps}/>
                ))}
        </div>

    </div>


);
export default CollectionPreview