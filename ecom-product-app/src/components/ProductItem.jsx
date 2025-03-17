import styles from "./ProductItem.module.css"

function ProductItem( { oneProduct }) {

    return (
        <div className={styles.productItem}>
            <h2>{oneProduct.name}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>{oneProduct.description}</p>

        </div>
)
}

export default ProductItem;