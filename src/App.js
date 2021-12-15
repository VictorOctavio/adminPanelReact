import React from "react";
import './app.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/UserList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductsList from './pages/productsList/ProductsList';



function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products" element={<ProductsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
