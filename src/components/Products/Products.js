import { useState } from 'react';
import './Products.css';
export default function Products({products,fproducts,loading,error,Fav,setFav,Cart,setCart,In,up})
{
    const handleClick=(index)=>{
        const newData=[...products];
        newData[index].details= !newData[index].details;
        fproducts(newData);
    }

    const handleFav=(index)=>{
        const newData=[...products];
        newData[index].fav= !newData[index].fav;
        fproducts(newData);
        if(newData[index].fav)
        {
            setFav([...Fav,newData[index]])
        }
        else{
            setFav(Fav.filter(pro=>pro.id!==newData[index].id));
        }
    }
    
    const [quantity,setQuantity]=useState(0);
    const handleAdd=(index)=>{
        if(quantity<=0)
        {
            alert("Please you can't enter quantity less than or equal 0");
        }
        else if(quantity>10)
        {
            alert("Please you can't enter quantity greater than 10")
        }
        else{
            const newData=[...products];
            const existingProduct = Cart.find(pro => pro.id === newData[index].id);
            if(existingProduct)
            {
                newData[index].quantity = quantity;
                fproducts(newData);
            }
            else
            {
                setCart([...Cart,newData[index]]);
            }
        }
    }
    return(
        <section className='product'>
            <h2 className='title'>Products</h2>
            {loading && <h2 className='warnning'>Loading...</h2>}
            {error && <h2  className='warnning'>Something went wrong!</h2>}
            {!up&&!loading && <h2 className='warnning'>Please Create Your Account First....</h2>}
            {!In&&up && <h2 className='warnning'>Please Sign In First...</h2>}
            <div className='pro'>
            {In&&up&&!loading && !error &&products.map((product,index)=>(
                <section key={index} className='products'>
                    <img src={product.image} alt={product.title} width="150px"/>
                    <div className='proContent'>
                        <h3 className='rate'>{product.rating.rate}⭐</h3>
                        <h3 className='protitle'>{product.title}</h3>
                        <h3 className='price'>{product.price}$</h3>
                        <h3 className='cat'>{product.category}</h3>
                        {
                            product.details &&
                            <p>{product.description}</p>
                        }
                        {
                            product.quantity>0&&
                            <h4>You want to buy {product.quantity} from {product.title}</h4>
                        }
                    </div>
                    <button onClick={()=>handleClick(index)}>
                        {(product.details)?"Hide Details":"Details"}
                    </button>
                    <button onClick={()=>handleFav(index)}>
                        {(product.fav)?"❤️":"🤍"}
                    </button>
                    <div className='input'>
                        <input  id="add" type="number" min="0" max="10" onChange={(e)=>setQuantity(e.target.value)} />
                        <button onClick={()=>handleAdd(index)}>Add To Cart</button>
                    </div>
                </section>
            ))}
            </div>
        </section>
    )
}
