import { useState } from "react";
import MenuContainer from './components/MenuContainer';
import Cart from "./components/Cart"

import "./reset.css";
import './App.css';

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'Fanta', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = () => {
    setProducts(products.filter(product => product.name === filteredProducts || product.category === filteredProducts))
  }

  const handleClick = (productId) => {
    const add = products.find((product) => product.id === productId);

    if (currentSale.includes(add) === false) {
      setCurrentSale([...currentSale, add]);
    }
  }
  console.log(currentSale)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1><b>Burguer</b> Kenzie</h1>
        <div className="searchBar">
          <input
            type="text"
            value={filteredProducts}
            onChange = {(event) => setFilteredProducts(event.target.value)}/>
          <button onClick={showProducts}>Pesquisar</button>
         
        </div>
      </header>

      <main>
        <MenuContainer products={products} handleClick={handleClick}/>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} setCartTotal={setCartTotal} cartTotal={cartTotal} />
      </main>
    </div>
  );
}

export default App;