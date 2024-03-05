import './Pokemon.css'
function Pokemon({name,image,id})
{
return(
<div className='container'>
    <div className="name">{name}</div>
<div className='image'><img src={image} alt='hii'></img></div>


</div>)
}
export default Pokemon