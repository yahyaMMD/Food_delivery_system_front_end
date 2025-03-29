import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductPage from "./pages/User/Product/ProductPage";
import ForgotPassword from "./pages/User/ForgotPassword/ForgotPassword";
import VerifyPassword from "./pages/User/ForgotPassword/verifyPassword";
import ResetPassword from "./pages/User/ForgotPassword/ResetPassword";
import Wishlist from "./pages/User/Wishlist/Wishlist";
import Cart from "./pages/User/Card/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductPage />}  />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}



export default App;
