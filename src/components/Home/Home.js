import './Home.css';
import { Link } from 'react-router-dom';
export default function Home()
{
    return(
        <section className='home'>
            <h2>Shop Smarter. Live Better</h2>
            <p>Discover a world of products designed to make your everyday shopping easier and more enjoyable.
                Explore a wide range of products across different categories, compare prices and ratings, and find exactly what you are looking for in just a few clicks.
                Whether you are searching for something new, upgrading your essentials, or simply exploring, our store makes it easy to discover products that match your needs.
                Browse our collection, use our smart search and filters to find the perfect product, and add your favorite items to your cart for a simple and convenient shopping experience.
            </p>
            <button><Link  className="link" to="/product">Explore Products</Link></button>
        </section>
    )
}
