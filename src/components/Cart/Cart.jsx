import { Card } from 'flowbite-react';
import {AiFillStar} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {setAddToCart, setRemoveFromCart} from "../../Redux/slices/cardSlice";

export default function ECommerceCard(product) {

    const dispatch = useDispatch()
    
    // console.log(product)
    let qty = 1 ;

    function handleAddToCart() {
        dispatch(setRemoveFromCart(product.id))
        dispatch(setAddToCart({product , qty}))
    }

    return (
        <Card
        style={{width: "250px"}}
        >
            <img src={`/${product.img}`} alt='#' className='h-48'/>
            <a href="/">
                <h1 className="text-4xl text-gray-900 dark:text-white">
                    <p>
                        {product.title}
                    </p>
                </h1>
            </a>
            <h2>{product.description}</h2>
            <div className="mb-5 mt-2.5 flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          <p>
            5.0
          </p>
        </span>
            </div>
            <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${product.price}
        </span>
                <div
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 cursor-pointer"
                >
                    <p onClick={handleAddToCart}>
                        Add to cart
                    </p>
                </div>
            </div>
        </Card>
    )
}


