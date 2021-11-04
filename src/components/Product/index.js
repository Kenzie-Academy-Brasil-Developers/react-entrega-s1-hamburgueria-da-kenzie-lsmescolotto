import "./Product.css"

const Product = ({product, handleClick}) => {
    const {id, name, price, category, img} = product;
    
    return (
        <div className="product">
            <div className="imgContainer"><img src={img} alt="food/drink"/></div>
            <h2>{name}</h2>
            <h3>{category}</h3>
            <span> R$ {price.toFixed(2)}</span>
            <button onClick={()=> handleClick(id)}>Add to cart</button>
        </div>
    )
}

export default Product;