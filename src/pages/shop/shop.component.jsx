import React, {useState} from 'react'
import CollectionPreview from '../../components/preview-collection/collection-preivew';
import SHOP_DATA from './shop.data';
const ShopPage = () =>{
    const [collections] = useState(SHOP_DATA)
    return (
        <div>
            {
            collections.filter((item, idx) => idx < 4).map(({id, ...otherCollectionProps}) =>(
                
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                 
            ))
            }
        </div>
    )
}
export default ShopPage;