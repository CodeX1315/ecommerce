import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { Login } from "./components/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/cart" element={ <Cart /> } />
      <Route path="/favorite" element={ <Wishlist />} />
      <Route path="/auth/login" element={ <Login /> } />
    </Routes>
    
  );
}

export default App;
