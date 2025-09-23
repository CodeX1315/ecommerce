import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/cart" element={ <Cart /> } />
      <Route path="/favorite" element={ <Wishlist />} />
    </Routes>
    
  );
}

export default App;
