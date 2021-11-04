import "./Cart.css";

const Cart = ( { currentSale, setCartTotal, cartTotal, setCurrentSale }) => {

    const cleanCart = () => {
        setCurrentSale([]);
    }

    const filterCart = (name) => {
        setCurrentSale(currentSale.filter((item) => item.name !== name));
    }

    return (
        <section className="Cart">
            <h2>Cart</h2>
            <div className="cartProductsContainer">
                {currentSale.map((item) =>
                    <div className="cartProduct">
                        <img src={item.img} alt="cartItem"/> 
                        <div className="nameCategory">
                            <h3>{item.name}</h3>
                            <span>{item.category}</span>
                        </div>
                        <button onClick={() => filterCart(item.name)}>Remove item</button>
                    </div>
                )}
            </div>
                
            <span className="price"> <b>Total</b> {setCartTotal(currentSale.reduce((accumulator, currentProduct) => accumulator + currentProduct.price, 0).toFixed(2))}{cartTotal}</span>
            <button className="cleanCart" onClick={cleanCart}>Clean cart</button>
        </section>
    )
    
}

export default Cart;