import './Cart.css';
export default function Cart({loading,error,Cartt,setCart,In,up})
{
    const handledel=(id,index)=>{
        const newData=[...Cartt];
        newData[index].quantity=0;
        setCart(newData);
        setCart(Cartt.filter(pro=>pro.id!==id));
    }
    return(
        <section className='cart'>
            <h2 className='title'>Cart</h2>
            {loading && <h2 className='warnning'>Loading...</h2>}
            {error && <h2  className='warnning'>Something went wrong!</h2>}
            {(Cartt.length===0||!In||!up) &&!loading&& <h2 className='warnning'>No Elements in Cart.</h2> }
            <div className='pro'>
            {In&&up&&!loading&& !error &&Cartt.map((pro,index)=>(
                <section key={index} className='products'>
                    <img src={pro.image} alt={pro.title} width="150px"/>
                    <div className='proContent'>
                        <h3 className='rate'>{pro.rating.rate}⭐</h3>
                        <h3 className='protitle'>{pro.title}</h3>
                        <h3 className='price'>{pro.price}$</h3>
                        <h3 className='cat'>{pro.category}</h3>
                        <p>{pro.description}</p>
                        <h4>{pro.quantity} {(Number(pro.quantity)===1)?"piece":"pieces"}</h4>
                    </div>
                    <button onClick={()=>handledel(pro.id,index)}>Delete From Cart</button>
                </section>
            ))}
            </div>
        </section>
    )
}
