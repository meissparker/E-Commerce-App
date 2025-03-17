import ProductItem from "./ProductItem"
import "./product-stylesheet.css"


function ProductList({ allProducts }) {

    return (
        <div className="main-product">
            {allProducts.map((product, i) => (
                <ProductItem key={i} oneProduct ={product} />
            ))}
        </div>

    )
}

export default ProductList;