import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/login-context";
// import logo from "../../assets/images/shopify.png";

export const Navbar = () => {
  const navigate = useNavigate();
const { loginDispatch , token} = useLogin();

const [isAccountLogin, setisAccountLogin] = useState(false);

const onLoginClick = () => {
  console.log("click")
  if(token){
    navigate('/auth/login')
  }else{
    loginDispatch({
      type: 'LOGOUT',

    })
    navigate('/auth/login')
  }
}

  return (
    <header className="sticky top-2 z-50">
      <nav className="flex justify-between items-center rounded-full shadow-lg top-0 bottom-0 bg-blue-50 h-[60px] ml-4 mr-4">
        <div onClick={ () => navigate('/')}>
          <span className="material-icons-outlined ml-[18px] w-[12px] h-[12px] hover:cursor-pointer">store_mall_directory</span>
        </div>
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex gap-4 text-gray-700 mr-8">
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              `hover:text-pink-500 ${isActive ? "text-pink-600" : ""}`
            }
          >
            <span className="material-icons-outlined text-3xl">favorite</span>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `hover:text-green-500 ${isActive ? "text-green-600" : ""}`
            }
          >
            <span className="material-icons-outlined text-3xl">
              shopping_cart
            </span>
          </NavLink>

          
            <span onClick={() => setisAccountLogin(!isAccountLogin)} className="material-icons-outlined text-3xl hover:text-blue-500 hover:cursor-pointer">
              account_circle
            </span>
            {
               isAccountLogin && <button onClick={onLoginClick} className="rounded-full bg-blue-400 p-3 w-16">
                {
                  token  ? 'LOGOUT' : 'LOGIN'
                }</button>
            }
          
        </div>
      </nav>
    </header>
  );
};
