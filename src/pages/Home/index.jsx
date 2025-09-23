import { Navbar } from "../../components/Navbar"
import { useEffect, useState } from "react";
import { getAllProduct } from "../../api/getAllProduct";
import { ProductCard } from "../../components/ProdctCard";


export const Home = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        (async () =>{
            const data = await getAllProduct();
            setProducts(data);
            console.log(data);
        })()
    }, [])
    return (
        <div className="bg-[#BBDEFB]">

            <Navbar />
            <main className="flex flex-wrap gap-2 justify-between z-1 mr-4 ml-4">
                {
                    products?.length > 0 && products.map( product => <ProductCard key={product.id} product={product}/>)
                }
            </main>
        </div>
    )
}