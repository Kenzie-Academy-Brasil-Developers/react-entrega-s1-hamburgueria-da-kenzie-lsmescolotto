import "./Header.css";

const Header = ( { filteredProducts, setFilteredProducts, showProducts, products2 }) => {
    
    return (
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
    )
}

export default Header;