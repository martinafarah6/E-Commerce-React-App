import { useEffect, useState } from 'react';
import {Header,Home,Products,Cart,DashBoard,SignUp,SignIn,Footer,LogOut, Favorites} from './components';
import {HashRouter,Routes,Route} from 'react-router-dom';
function App()
{
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [fav,setfav]=useState([]);
    const [cart,setcart]=useState([]);
    const [up,setup]=useState(false);
    const [In,setin]=useState(false);
    useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response => {
        if(!response.ok){
            throw new Error("Error");
        }
            return response.json();
        })
    .then(data=>{
        const newData = data.map(product => ({
            ...product,
            fav:false,
            details:false,
            quantity:0
        }));

        setProducts(newData);
        setLoading(false);
    })
    .catch(()=>{
        setError(true);
        setLoading(false);
    })
    },[])
    return(
        <HashRouter>
            <Header/>
            <Routes>
                <Route path="/signup" element={<SignUp fclient={setup}/>}/>
                <Route path="/signin" element={<SignIn fclient={setin}/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/product" element={<Products In={In} up={up} Cart={cart} setCart={setcart} Fav={fav} setFav={setfav} error={error} loading={loading} products={products} fproducts={setProducts}/>}/>
                <Route path="/dash" element={<DashBoard In={In} up={up}/>}/>
                <Route path="/cart" element={<Cart In={In} up={up} Cartt={cart} setCart={setcart} error={error} loading={loading} />}/>
                <Route path="/fav"element={<Favorites In={In} up={up} Favv={fav} error={error} loading={loading}/>}/>
                <Route path='/out' element={<LogOut In={In} up={up} fin={setin} fup={setup}/>} />
            </Routes>
            <Footer/>
        </HashRouter>
    )
}
export default App;
