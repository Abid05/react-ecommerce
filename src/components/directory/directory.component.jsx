import React, {useState} from 'react' 
import MenuItem from '../menu-item/menu-item.component';
export default function Directory() {
    const [sections] = useState(
         [
            {
              title: 'hats',
              imageUrl: 'https://source.unsplash.com/300x300/?collection,hat',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://source.unsplash.com/300x300/?collection,jacket',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://source.unsplash.com/300x300/?collection,sneaker',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://source.unsplash.com/300x300/?human,women',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://source.unsplash.com/300x300/?human,men',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
        
        )
    return (
       <div>
             <div className="d-grid"> 
        {
            sections ? sections.map(({id, ...otherSectionProps}) =>{
                return (
                    <MenuItem key={id} {...otherSectionProps} />
                    )
                }) : "Loading..."
            }           
            </div>
       </div>
    )
}
