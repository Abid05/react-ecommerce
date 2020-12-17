import React from 'react' 
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
const  MenuItem = ({title, imageUrl, linkUrl, match, history,size}) => {
    return (
     
 <div className="card c-pointer" onClick={() =>{
    history.push(`${match.url}${linkUrl}`)
 }}>
    <div className="card-img">
        {
       imageUrl ? <img className="img" src={imageUrl} alt=""/> : "loading..."
        }
    </div>
    <div className="card-text">
        <h2 className="card-title">{title}</h2>
        <Link to="/" className="card-sub-title">Shop Now</Link>
    </div> 
</div>
    )
}
export default withRouter(MenuItem);