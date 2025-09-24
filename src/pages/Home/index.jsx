import { Navbar } from "../../components/Navbar"
import { useEffect, useState } from "react";
import { getAllProduct } from "../../api/getAllProduct";
import { ProductCard } from "../../components/ProdctCard";
// import { getProductCategory } from "../../api/getAllProduct";
// import { getProductByCategory } from "../../utils/getProductByCategory";


export const Home = () => {

    const [products, setProducts] = useState([]);
    // const [category, setCategory] = useState([]);
    // const [selectedCategory, setSelectedCategory] = useState("ALL");
    
    useEffect(() => {
        (async () =>{
            const data = await getAllProduct();
            //  const categories = await getProductCategory();
            //  const updatedCategory = [...categories, { id : '1a', name: 'ALL'}]
            setProducts(data);
            // setCategory(updatedCategory);
            console.log(data);
        })()
    }, [])

    // const onCategoryClick = (category) => {
    //     // setSelectedCategory(category);
    // }

    // const filterCategory = getProductByCategory(selectedCategory, products);
    return (
        <div className="bg-[#BBDEFB]">

            <Navbar />
            <main>
                {/* <div className="flex flex-wrap justify-center gap-4 ml-2 mr-2" onClick={() => onCategoryClick(category)}>
                    {
                        category?.length > 0 && category.map( category => 
                                <div className="bg-blue-300 font-mono rounded-full px-4 py-2 mt-2 mb-2 text-center text-sm whitespace-nowrap max-w-xs overflow-hidden text-ellipsis hover:cursor-pointer">{category.name}</div>)
                    }
                </div> */}
                <div className="flex flex-wrap gap-2 justify-between z-1 mr-4 ml-4">{
                    products?.length > 0 && products.map( product => <ProductCard key={product.id} product={product}/>)
                }
                </div> 
            </main>
        </div>
    )
}