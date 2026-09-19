import './Favorites.css';
export default function Favorites(props)
{
    return(
        <section id="fav">
            <h2 className='title'>Favorites</h2>
            {props.loading && <h2 className='warnning'>Loading...</h2>}
            {props.error && <h2  className='warnning'>Something went wrong!</h2>}
            {(props.Favv.length===0||!props.In||!props.up) &&!props.loading&& <h2 className='warnning'>No Elements in Favorites.</h2>}
            <div className='pro'>
            {props.In&&props.up&&!props.loading&&!props.error&&props.Favv.map((pro,index)=>(
                <section key={index} className='products'>
                    <img src={pro.image} alt={pro.title} width="150px"/>
                    <div className='proContent'>
                        <h3 className='rate'>{pro.rating.rate}⭐</h3>
                        <h3 className='protitle'>{pro.title}</h3>
                        <h3 className='price'>{pro.price}$</h3>
                        <h3 className='cat'>{pro.category}</h3>
                        <p>{pro.description}</p>
                    </div>
                </section>
            ))}
            </div>
        </section>
    )
}
