// renderiza a lisra de produtos
import Product from "../Product";

import "./MenuContainer.css"

const MenuContainer = ({ products, handleClick }) => {
    
    return(
        <div className="containerProducts">{products.map(item => <Product product={item} handleClick={handleClick}/>)}</div>
    )
}

export default MenuContainer;