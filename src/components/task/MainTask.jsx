import Header from "../shared/Header";
import Footer from "../shared/Footer";
import SortSection from "./SortSection";
import ProductSection from "./ProductSection";
import { useEffect, useState } from "react";
import { ProductsList } from "../../assets/data/Data.js";
import { getThemeFormLocaleStorage } from "../../utils/LocalStorage.js";

const MainTask = () => {
  const [products, setProduct] = useState(ProductsList);
  const [sortedProduct, setSortedProduct] = useState(ProductsList);
  const [toggleView, setToggleView] = useState(false);
  const [dark, setDark] = useState(true);
  const [theme, setTheme] = useState(getThemeFormLocaleStorage());
  const [searchQuery, setSearchQuery] = useState("");

// ----- Theme handle -----
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);
  
  const darkModeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setDark(!dark)
  };

  //----- View handle -----
  const handleViewClick = () => {
    setToggleView(!toggleView);
  };


  const updateFilteredProducts = (sortFunction = null, query = searchQuery) => {
    let updatedProducts = [...products];

    if (query) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (sortFunction) {
      updatedProducts = sortFunction(updatedProducts);
    }

    setSortedProduct(updatedProducts);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    updateFilteredProducts(null, query); 
  };

  const handleSortChange = (sortFunction) => {
    updateFilteredProducts(sortFunction);
  };
 

  return (
    <>
      <Header
        handleViewClick={handleViewClick}
        darkModeHandler={darkModeHandler}
        dark={dark}
        toggleView={toggleView}
        handleSearchChange={handleSearchChange}
        searchQuery={searchQuery}
        sortedProduct={sortedProduct}
        setSortedProduct={setSortedProduct}
      />
      <SortSection products={products} setSortedProduct={handleSortChange} />
      {setSortedProduct.length > 0 || searchQuery ? (
        <ProductSection
          toggleView={toggleView}
          sortedProduct={sortedProduct}
          searchQuery={searchQuery}
        />
      ) : (
        "Product Not Found"
      )}
      <Footer />
    </>
  );
};

export default MainTask;
